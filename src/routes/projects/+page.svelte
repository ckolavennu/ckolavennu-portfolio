<section class="page projects-page">
	<div class="projects-orb"></div>

	<p class="eyebrow">Projects</p>

	<h1>Project Portfolio</h1>

	<p class="subtitle">
		A focused collection of analytics, machine learning, and full-stack projects built around
		real problems, practical workflows, and deployed outcomes.
	</p>

	<div class="project-stats project-focus-grid">
		<div>
			<span>Machine Learning</span>
			<strong>Predictive Analytics</strong>
			<p>Classification, model evaluation, imbalance handling, and Streamlit deployment.</p>
		</div>

		<div>
			<span>Data Analytics</span>
			<strong>Real-World Insights</strong>
			<p>Data collection, cleaning, exploratory analysis, dashboards, and reporting.</p>
		</div>

		<div>
			<span>Transport Analytics</span>
			<strong>Urban Mobility</strong>
			<p>Transit accessibility, reliability thinking, open data, and geospatial storytelling.</p>
		</div>
	</div>

	<div class="flagship-project fyp-feature">
		<div>
			<p class="status">Final Year Project</p>
			<h2>Student Dropout Risk Prediction</h2>
			<p>
				A machine learning-based predictive analytics project that identifies student withdrawal
				risk in higher education using academic and demographic indicators, with a deployed
				Streamlit dashboard for interactive exploration.
			</p>

			<div class="project-meta-grid">
				<div>
					<span>Problem Area</span>
					<strong>Student Retention</strong>
				</div>

				<div>
					<span>Tools</span>
					<strong>Python · ML · Streamlit</strong>
				</div>

				<div>
					<span>Output</span>
					<strong>Live Dashboard + Model</strong>
				</div>
			</div>

			<div class="studyflow-actions">
				<a href="/projects/student-dropout" class="primary">View Case Study</a>
				<a href="https://ck-fyp.streamlit.app/" target="_blank" class="secondary">Live Demo</a>
				<a
					href="https://github.com/ckolavennu/student-dropout-risk-prediction-demo"
					target="_blank"
					class="secondary"
				>
					GitHub Repo
				</a>
			</div>
		</div>

		<div class="fyp-visual" aria-hidden="true">
			<div class="fyp-model-card">
				<span>Model Output</span>
				<strong>Dropout Risk</strong>
				<div class="fyp-score-ring">76%</div>
			</div>

			<div class="fyp-dashboard-card">
				<div class="fyp-card-top"></div>
				<div class="fyp-bars">
					<span style="height: 48%"></span>
					<span style="height: 72%"></span>
					<span style="height: 36%"></span>
					<span style="height: 84%"></span>
				</div>
				<div class="fyp-line"></div>
			</div>
		</div>
	</div>

	<div class="project-list enhanced-project-list compact-project-list">
		<a href="/projects/student-dropout" class="project-row fyp-row">
			<div>
				<p class="status">Live Demo</p>
				<h2>Student Dropout Risk Prediction</h2>
				<p>
					A final year machine learning project focused on predicting withdrawal risk in higher
					education using academic indicators and a deployed Streamlit dashboard.
				</p>

				<div class="tags">
					<span>Python</span>
					<span>Machine Learning</span>
					<span>Classification</span>
					<span>Streamlit</span>
				</div>
			</div>

			<strong>View Case Study →</strong>
		</a>

		<a href="/projects/foodbasket" class="project-row">
			<div>
				<p class="status">In Progress</p>
				<h2>Foodbasket Analytics</h2>
				<p>
					Analysing food affordability and cost-of-living pressure through basket-level pricing,
					category contribution, and dashboard-based insights.
				</p>

				<div class="tags">
					<span>Python</span>
					<span>Excel</span>
					<span>EDA</span>
					<span>Dashboarding</span>
				</div>
			</div>

			<strong>View Case Study →</strong>
		</a>

		<a
			href="https://github.com/ckolavennu/TransitPulse-Klang-Valley"
			class="project-row transitpulse-row"
			target="_blank"
			rel="noreferrer"
		>
			<div>
				<p class="status">Active Build</p>
				<h2>TransitPulse Klang Valley</h2>
				<p>
					A transport analytics project for exploring Klang Valley transit accessibility,
					service reliability, and mobility patterns through open data and dashboard-ready insights.
				</p>

				<div class="tags">
					<span>Python</span>
					<span>Open Data</span>
					<span>Geospatial</span>
					<span>Dashboarding</span>
				</div>
			</div>

			<strong>View GitHub Repo →</strong>
		</a>
	</div>
</section>

<style>
	.project-focus-grid strong {
		font-size: 1.35rem;
		line-height: 1.25;
	}

	.compact-project-list {
		margin-top: 44px;
	}

	.fyp-feature {
		background:
			radial-gradient(circle at top right, rgba(56, 189, 248, 0.2), transparent 38%),
			linear-gradient(rgba(15, 23, 42, 0.78), rgba(15, 23, 42, 0.78)) padding-box,
			linear-gradient(135deg, rgba(56, 189, 248, 0.55), rgba(244, 114, 182, 0.36)) border-box;
	}

	.fyp-visual {
		position: relative;
		min-height: 360px;
	}

	.fyp-dashboard-card,
	.fyp-model-card {
		border: 1px solid rgba(148, 163, 184, 0.18);
		background: rgba(2, 6, 23, 0.52);
		box-shadow: 0 22px 70px rgba(0, 0, 0, 0.26);
		backdrop-filter: blur(18px);
	}

	.fyp-dashboard-card {
		position: absolute;
		right: 0;
		bottom: 12px;
		width: min(380px, 92%);
		height: 250px;
		border-radius: 28px;
		padding: 20px;
		overflow: hidden;
		background:
			linear-gradient(rgba(2, 6, 23, 0.58), rgba(2, 6, 23, 0.58)),
			linear-gradient(rgba(148, 163, 184, 0.045) 1px, transparent 1px),
			linear-gradient(90deg, rgba(148, 163, 184, 0.045) 1px, transparent 1px);
		background-size: auto, 28px 28px, 28px 28px;
		animation: studyflowFloat 6s ease-in-out infinite;
	}

	.fyp-card-top {
		width: 68%;
		height: 18px;
		border-radius: 999px;
		background: linear-gradient(90deg, #38bdf8, #f472b6);
	}

	.fyp-bars {
		position: absolute;
		left: 26px;
		right: 26px;
		bottom: 32px;
		display: flex;
		align-items: end;
		gap: 14px;
		height: 150px;
	}

	.fyp-bars span {
		flex: 1;
		border-radius: 999px 999px 8px 8px;
		background: linear-gradient(180deg, #38bdf8, rgba(56, 189, 248, 0.12));
		animation: barPulse 3s ease-in-out infinite;
	}

	.fyp-line {
		position: absolute;
		left: 28px;
		right: 28px;
		top: 112px;
		height: 2px;
		background: linear-gradient(90deg, #38bdf8, #a78bfa, #f472b6);
		transform: rotate(-7deg);
		box-shadow: 0 0 28px rgba(56, 189, 248, 0.42);
	}

	.fyp-model-card {
		position: absolute;
		z-index: 4;
		left: 0;
		top: 24px;
		width: 172px;
		border-radius: 24px;
		padding: 18px;
		animation: studyflowFloat 5s ease-in-out infinite;
	}

	.fyp-model-card span {
		color: #94a3b8;
		font-size: 0.78rem;
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.fyp-model-card strong {
		display: block;
		margin: 8px 0 14px;
		color: #f8fafc;
		font-size: 1.2rem;
	}

	.fyp-score-ring {
		display: grid;
		width: 92px;
		height: 92px;
		place-items: center;
		border-radius: 50%;
		background:
			radial-gradient(circle, rgba(15, 23, 42, 0.98) 54%, transparent 56%),
			conic-gradient(#38bdf8 0 76%, rgba(148, 163, 184, 0.18) 76% 100%);
		color: #f8fafc;
		font-weight: 900;
		font-size: 1.25rem;
	}

	.fyp-row {
		background:
			radial-gradient(circle at top right, rgba(56, 189, 248, 0.14), transparent 42%),
			rgba(15, 23, 42, 0.68);
	}

	.transitpulse-row {
		background:
			radial-gradient(circle at top right, rgba(168, 85, 247, 0.12), transparent 42%),
			rgba(15, 23, 42, 0.68);
	}

	.studyflow-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 26px;
	}

	@keyframes studyflowFloat {
		0%, 100% {
			transform: translateY(0) rotate(-1deg);
		}

		50% {
			transform: translateY(-12px) rotate(1deg);
		}
	}

	@media (max-width: 960px) {
		.flagship-project {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 560px) {
		.flagship-project {
			padding: 24px;
		}

		.fyp-model-card {
			display: none;
		}

		.fyp-dashboard-card {
			position: relative;
			width: auto;
		}
	}
</style>