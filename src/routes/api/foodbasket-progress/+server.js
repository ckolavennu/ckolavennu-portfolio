import { json } from '@sveltejs/kit';

const OWNER = 'ckolavennu';
const REPO = 'foodbasket-analytics';

export async function GET({ fetch }) {
	try {
		const milestoneResponse = await fetch(
			`https://api.github.com/repos/${OWNER}/${REPO}/milestones?state=all&per_page=100`,
			{
				headers: {
					Accept: 'application/vnd.github+json',
					'X-GitHub-Api-Version': '2022-11-28'
				}
			}
		);

		if (!milestoneResponse.ok) {
			return json(
				{
					error: 'Unable to fetch GitHub milestones',
					status: milestoneResponse.status
				},
				{ status: 500 }
			);
		}

		const milestones = await milestoneResponse.json();

		const milestoneData = await Promise.all(
			milestones.map(async (milestone) => {
				const issuesResponse = await fetch(
					`https://api.github.com/repos/${OWNER}/${REPO}/issues?state=all&milestone=${milestone.number}&per_page=100`,
					{
						headers: {
							Accept: 'application/vnd.github+json',
							'X-GitHub-Api-Version': '2022-11-28'
						}
					}
				);

				if (!issuesResponse.ok) {
					return {
						title: milestone.title,
						description: milestone.description,
						openIssues: milestone.open_issues,
						closedIssues: milestone.closed_issues,
						totalIssues: milestone.open_issues + milestone.closed_issues,
						progress: 0,
						issues: []
					};
				}

				const issues = await issuesResponse.json();

				const taskIssues = issues.filter((issue) => !issue.pull_request);

				const totalIssues = taskIssues.length;
				const closedIssues = taskIssues.filter((issue) => issue.state === 'closed').length;
				const openIssues = taskIssues.filter((issue) => issue.state === 'open').length;

				const progress = totalIssues === 0 ? 0 : Math.round((closedIssues / totalIssues) * 100);

				return {
					title: milestone.title,
					description: milestone.description,
					openIssues,
					closedIssues,
					totalIssues,
					progress,
					url: milestone.html_url,
					issues: taskIssues.map((issue) => ({
						number: issue.number,
						title: issue.title,
						state: issue.state,
						url: issue.html_url,
						updatedAt: issue.updated_at
					}))
				};
			})
		);

		const visibleMilestones = milestoneData.filter((milestone) => milestone.totalIssues > 0);

		const totalIssues = visibleMilestones.reduce(
			(total, milestone) => total + milestone.totalIssues,
			0
		);

		const closedIssues = visibleMilestones.reduce(
			(total, milestone) => total + milestone.closedIssues,
			0
		);

		const openIssues = visibleMilestones.reduce(
			(total, milestone) => total + milestone.openIssues,
			0
		);

		const overallProgress = totalIssues === 0 ? 0 : Math.round((closedIssues / totalIssues) * 100);

		const allIssues = visibleMilestones.flatMap((milestone) =>
			milestone.issues.map((issue) => ({
				...issue,
				milestone: milestone.title
			}))
		);

		const latestIssue = allIssues
			.slice()
			.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))[0];

		return json({
			repo: `${OWNER}/${REPO}`,
			repoUrl: `https://github.com/${OWNER}/${REPO}`,
			overallProgress,
			totalIssues,
			closedIssues,
			openIssues,
			latestIssue: latestIssue || null,
			milestones: visibleMilestones
		});
	} catch (error) {
		return json(
			{
				error: 'Unexpected error while loading GitHub progress',
				message: error.message
			},
			{ status: 500 }
		);
	}
}