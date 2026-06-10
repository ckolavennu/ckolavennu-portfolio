<script>
	let progressData = $state(null);
	let progressError = $state(null);

	$effect(() => {
		async function loadProgress() {
			try {
				const response = await fetch('/api/foodbasket-progress');

				if (!response.ok) {
					throw new Error('Failed to load GitHub progress');
				}

				progressData = await response.json();
			} catch (error) {
				progressError = error.message;
			}
		}

		loadProgress();
	});
</script>

<section class="page project-detail">
	<p class="eyebrow">Case Study</p>

	<h1>Foodbasket Analytics</h1>

	<p class="subtitle">
		Analysing food affordability and cost-of-living pressure through basket-level pricing,
		category contribution, and dashboard-based insight generation.
	</p>

	<div class="kpi-grid">
		<div>
			<span>Problem Area</span>
			<strong>Food Affordability</strong>
		</div>

		<div>
			<span>Analysis Level</span>
			<strong>Basket Cost</strong>
		</div>

		<div>
			<span>Output</span>
			<strong>Dashboard + Insights</strong>
		</div>

		<div>
			<span>Status</span>
			<strong>In Progress</strong>
		</div>
	</div>

	<div class="github-progress-card">
	<div class="github-progress-header">
		<div>
			<p class="eyebrow">Live GitHub Progress</p>
			<h2>Foodbasket build tracker</h2>
		</div>

		{#if progressData}
			<a href={progressData.repoUrl} target="_blank">View Repo →</a>
		{/if}
	</div>

	{#if progressError}
		<p class="progress-muted">Unable to load GitHub progress right now.</p>
	{:else if !progressData}
		<p class="progress-muted">Loading GitHub progress...</p>
	{:else}
		<div class="overall-progress">
			<div>
				<strong>{progressData.overallProgress}%</strong>
				<span>Overall complete</span>
			</div>

			<div class="progress-bar">
				<span style={`width: ${progressData.overallProgress}%`}></span>
			</div>
		</div>

		<div class="progress-summary">
			<div>
				<strong>{progressData.closedIssues}</strong>
				<span>Closed issues</span>
			</div>

			<div>
				<strong>{progressData.openIssues}</strong>
				<span>Open issues</span>
			</div>

			<div>
				<strong>{progressData.totalIssues}</strong>
				<span>Total issues</span>
			</div>
		</div>

		<div class="milestone-progress-list">
			{#each progressData.milestones as milestone}
				<a href={milestone.url} target="_blank" class="milestone-progress-card">
					<div class="milestone-progress-top">
						<div>
							<strong>{milestone.title}</strong>
							<span>{milestone.closedIssues} / {milestone.totalIssues} completed</span>
						</div>

						<p>{milestone.progress}%</p>
					</div>

					<div class="mini-progress-bar">
						<span style={`width: ${milestone.progress}%`}></span>
					</div>
				</a>
			{/each}
		</div>

		{#if progressData.latestIssue}
			<div class="latest-github-update">
				<span>Latest update</span>
				<a href={progressData.latestIssue.url} target="_blank">
					{progressData.latestIssue.title}
				</a>
				<small>{progressData.latestIssue.milestone}</small>
			</div>
		{/if}
	{/if}
</div>


	<div class="meta-grid">
		<div>
			<span>Status</span>
			<strong>In Progress</strong>
		</div>

		<div>
			<span>Role</span>
			<strong>Data Analyst</strong>
		</div>

		<div>
			<span>Focus</span>
			<strong>Food Affordability</strong>
		</div>

		<div>
			<span>Tools</span>
			<strong>Python, Excel, Power BI / Streamlit</strong>
		</div>
	</div>

	<div class="content-card highlight-card">
		<h2>Project Summary</h2>
		<p>
			Foodbasket Analytics is a data analytics project focused on understanding how the cost of
			essential food items contributes to affordability pressure. Instead of only looking at
			individual food prices, the project analyses basket-level cost, category contribution, and
			patterns that can help explain where cost pressure comes from.
		</p>
	</div>

	<div class="two-column">
		<div class="content-card">
			<h2>Problem Statement</h2>
			<p>
				Food prices are often discussed in broad terms, but people usually experience the impact
				through a full basket of essential items. This project aims to make that impact clearer
				by analysing how different food categories contribute to the total basket cost.
			</p>
		</div>

		<div class="content-card">
			<h2>Why It Matters</h2>
			<p>
				A structured foodbasket analysis can support budgeting, affordability tracking, and
				better communication of cost-of-living pressure for students, households, and
				lower-income groups.
			</p>
		</div>
	</div>

	<div class="content-card">
		<h2>Planned Methodology</h2>

		<div class="timeline">
			<div>
				<span>01</span>
				<p>Collect or structure food price data for essential basket items.</p>
			</div>

			<div>
				<span>02</span>
				<p>Clean and prepare the dataset for analysis.</p>
			</div>

			<div>
				<span>03</span>
				<p>Create metrics such as total basket cost and category contribution.</p>
			</div>

			<div>
				<span>04</span>
				<p>Build visualisations and dashboard views to communicate findings.</p>
			</div>

			<div>
				<span>05</span>
				<p>Summarise insights, limitations, and practical recommendations.</p>
			</div>
		</div>
	</div>

	<div class="two-column">
		<div class="content-card">
			<h2>Expected Outputs</h2>
			<ul>
				<li>Cleaned food price dataset</li>
				<li>Exploratory data analysis</li>
				<li>Basket-level affordability metrics</li>
				<li>Dashboard or visual report</li>
				<li>Final insight summary</li>
			</ul>
		</div>

		<div class="content-card">
			<h2>Skills Demonstrated</h2>
			<ul>
				<li>Data cleaning and preparation</li>
				<li>Exploratory analysis</li>
				<li>KPI and metric design</li>
				<li>Dashboard storytelling</li>
				<li>Business value communication</li>
			</ul>
		</div>
	</div>
</section>