<section class="page studyflow-page">
	<div class="studyflow-page-orb"></div>

	<p class="eyebrow">Full-Stack Project</p>

	<h1>StudyFlow</h1>

	<p class="subtitle">
		An active SvelteKit productivity web app for students to manage assignments, academic
		tasks, and study planning with user authentication and account-based data storage.
	</p>

	<div class="studyflow-hero-panel">
		<div>
			<p class="status">Active Build</p>
			<h2>Student planning, but cleaner.</h2>
			<p>
				StudyFlow is being built as a modern assignment and task tracker for students who need
				a simple place to manage academic work. The goal is to combine a clean interface,
				login-based personal storage, and practical task workflows.
			</p>

			<div class="studyflow-actions">
				<a href="https://github.com/ckolavennu/StudyFlow" target="_blank" class="primary">
					View GitHub Repo
				</a>
				<a href="/projects" class="secondary">Back to Projects</a>
			</div>
		</div>

		<div class="studyflow-product-visual" aria-hidden="true">
			<div class="planner-card planner-card-one">
				<span>Today</span>
				<strong>3 tasks</strong>
				<div></div>
				<div></div>
			</div>

			<div class="planner-card planner-card-two">
				<span>Module</span>
				<strong>Assignment plan</strong>
				<p>In progress</p>
			</div>

			<div class="planner-board">
				<div class="board-top"></div>
				<div class="board-columns">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div class="board-task active"></div>
				<div class="board-task"></div>
				<div class="board-task done"></div>
			</div>
		</div>
	</div>

	<div class="meta-grid">
		<div>
			<span>Project Type</span>
			<strong>Full-Stack Web App</strong>
		</div>

		<div>
			<span>Current Status</span>
			<strong>In Progress</strong>
		</div>

		<div>
			<span>Core Stack</span>
			<strong>SvelteKit · Firebase</strong>
		</div>
	</div>

	<div class="content-card highlight-card">
		<h2>Project Summary</h2>
		<p>
			StudyFlow is a student-focused planning application designed to help users organise
			assignments and academic tasks in one place. The project focuses on building a clean user
			experience while also practising real full-stack concepts such as authentication,
			protected user data, and database-backed task management.
		</p>
	</div>

	<div class="two-column">
		<div class="content-card">
			<h2>What It Solves</h2>
			<p>
				Students often track academic work across chat messages, LMS pages, notes, calendars,
				and memory. StudyFlow aims to reduce that friction by giving users a focused workspace
				for academic tasks and assignment planning.
			</p>
		</div>

		<div class="content-card">
			<h2>Why It Belongs Here</h2>
			<p>
				Although it is not a pure analytics project, StudyFlow shows my ability to build usable
				web applications, design clear interfaces, work with authentication, and structure a
				project through GitHub issues.
			</p>
		</div>
	</div>

	<div class="content-card">
		<h2>Planned Features</h2>
		<div class="studyflow-feature-grid">
			<div>
				<span>01</span>
				<strong>User Authentication</strong>
				<p>Allow users to create accounts, log in, and keep their own task data separate.</p>
			</div>

			<div>
				<span>02</span>
				<strong>Assignment Tracker</strong>
				<p>Store assignment titles, modules, dates, statuses, and priority levels.</p>
			</div>

			<div>
				<span>03</span>
				<strong>Task Dashboard</strong>
				<p>Show upcoming work, completed tasks, and progress in a simple dashboard layout.</p>
			</div>

			<div>
				<span>04</span>
				<strong>Clean Student UI</strong>
				<p>Keep the app fast, readable, and focused instead of overloaded with features.</p>
			</div>
		</div>
	</div>

	<div class="content-card">
		<h2>Skills Demonstrated</h2>
		<div class="tags">
			<span>SvelteKit</span>
			<span>Firebase Authentication</span>
			<span>Firestore</span>
			<span>CRUD Workflows</span>
			<span>UI Design</span>
			<span>GitHub Issues</span>
		</div>
	</div>
</section>

<style>
	.studyflow-page {
		position: relative;
		overflow: hidden;
	}

	.studyflow-page > *:not(.studyflow-page-orb) {
		position: relative;
		z-index: 2;
	}

	.studyflow-page-orb {
		position: absolute;
		top: 140px;
		right: -120px;
		width: 430px;
		height: 430px;
		border-radius: 50%;
		background: #a78bfa;
		filter: blur(90px);
		opacity: 0.2;
		animation: driftOrb 13s ease-in-out infinite;
		pointer-events: none;
	}

	.studyflow-hero-panel {
		display: grid;
		grid-template-columns: 1.05fr 0.95fr;
		gap: 34px;
		align-items: center;
		margin-top: 38px;
		border: 1px solid rgba(148, 163, 184, 0.18);
		border-radius: 34px;
		padding: 34px;
		background:
			radial-gradient(circle at top right, rgba(56, 189, 248, 0.13), transparent 42%),
			linear-gradient(rgba(15, 23, 42, 0.78), rgba(15, 23, 42, 0.78)) padding-box,
			linear-gradient(135deg, rgba(168, 85, 247, 0.5), rgba(56, 189, 248, 0.38)) border-box;
		box-shadow: 0 28px 90px rgba(0, 0, 0, 0.24);
	}

	.studyflow-hero-panel h2 {
		margin: 0 0 14px;
		font-size: clamp(2rem, 4vw, 3.5rem);
		letter-spacing: -0.05em;
	}

	.studyflow-hero-panel p:not(.status) {
		color: #cbd5e1;
		line-height: 1.8;
	}

	.studyflow-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 26px;
	}

	.studyflow-product-visual {
		position: relative;
		min-height: 360px;
	}

	.planner-board,
	.planner-card {
		border: 1px solid rgba(148, 163, 184, 0.18);
		background: rgba(2, 6, 23, 0.52);
		box-shadow: 0 22px 70px rgba(0, 0, 0, 0.26);
		backdrop-filter: blur(18px);
	}

	.planner-board {
		position: absolute;
		right: 0;
		bottom: 12px;
		width: min(360px, 92%);
		height: 250px;
		border-radius: 28px;
		padding: 20px;
		background:
			linear-gradient(rgba(2, 6, 23, 0.58), rgba(2, 6, 23, 0.58)),
			linear-gradient(rgba(148, 163, 184, 0.045) 1px, transparent 1px),
			linear-gradient(90deg, rgba(148, 163, 184, 0.045) 1px, transparent 1px);
		background-size: auto, 28px 28px, 28px 28px;
		animation: boardFloat 6s ease-in-out infinite;
	}

	.board-top {
		width: 64%;
		height: 18px;
		border-radius: 999px;
		background: linear-gradient(90deg, #38bdf8, #a78bfa);
		margin-bottom: 18px;
	}

	.board-columns {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
		margin-bottom: 14px;
	}

	.board-columns span,
	.board-task {
		border-radius: 14px;
		background: rgba(148, 163, 184, 0.16);
	}

	.board-columns span {
		height: 58px;
	}

	.board-task {
		height: 34px;
		margin-bottom: 10px;
	}

	.board-task.active {
		background: rgba(168, 85, 247, 0.24);
	}

	.board-task.done {
		background: rgba(56, 189, 248, 0.24);
	}

	.planner-card {
		position: absolute;
		z-index: 4;
		border-radius: 22px;
		padding: 18px;
	}

	.planner-card span {
		color: #94a3b8;
		font-size: 0.8rem;
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.planner-card strong {
		display: block;
		margin-top: 8px;
		color: #f8fafc;
		font-size: 1.2rem;
	}

	.planner-card-one {
		left: 0;
		top: 24px;
		width: 150px;
		animation: cardFloat 5s ease-in-out infinite;
	}

	.planner-card-one div {
		height: 10px;
		border-radius: 999px;
		background: rgba(148, 163, 184, 0.22);
		margin-top: 12px;
	}

	.planner-card-two {
		right: 18px;
		top: 0;
		width: 165px;
		animation: cardFloat 5s ease-in-out infinite;
		animation-delay: 0.8s;
	}

	.planner-card-two p {
		width: fit-content;
		margin: 12px 0 0;
		border-radius: 999px;
		padding: 7px 10px;
		background: rgba(56, 189, 248, 0.12);
		color: #7dd3fc;
		font-size: 0.8rem;
		font-weight: 900;
	}

	.studyflow-feature-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 14px;
		margin-top: 18px;
	}

	.studyflow-feature-grid div {
		border: 1px solid rgba(148, 163, 184, 0.16);
		border-radius: 22px;
		padding: 18px;
		background: rgba(2, 6, 23, 0.35);
	}

	.studyflow-feature-grid span {
		color: #7dd3fc;
		font-weight: 900;
	}

	.studyflow-feature-grid strong {
		display: block;
		margin: 12px 0 8px;
		color: #f8fafc;
	}

	.studyflow-feature-grid p {
		margin: 0;
		color: #94a3b8;
		line-height: 1.65;
	}

	@keyframes boardFloat {
		0%, 100% {
			transform: translateY(0) rotate(-1deg);
		}

		50% {
			transform: translateY(-12px) rotate(1deg);
		}
	}

	@keyframes cardFloat {
		0%, 100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-10px);
		}
	}

	@media (max-width: 960px) {
		.studyflow-hero-panel,
		.studyflow-feature-grid {
			grid-template-columns: 1fr;
		}

		.studyflow-product-visual {
			min-height: 330px;
		}
	}

	@media (max-width: 560px) {
		.studyflow-hero-panel {
			padding: 24px;
		}

		.planner-card {
			display: none;
		}

		.planner-board {
			position: relative;
			width: auto;
		}
	}
</style>
