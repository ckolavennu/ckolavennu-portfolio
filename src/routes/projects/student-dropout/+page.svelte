<section class="page fyp-page">
	<div class="fyp-page-orb"></div>

	<p class="eyebrow">Final Year Project</p>

	<h1>Student Dropout Risk Prediction</h1>

	<p class="subtitle">
		A machine learning-based predictive analytics project for identifying student withdrawal
		risk in higher education using academic and demographic indicators.
	</p>

	<div class="fyp-hero-panel">
		<div>
			<p class="status">Live Streamlit Demo</p>
			<h2>Predictive analytics for student retention.</h2>
			<p>
				This project uses a cleaned higher education student dataset, supervised machine learning,
				class imbalance handling, and a deployed Streamlit dashboard to support early visibility
				into dropout-related risk patterns.
			</p>

			<div class="fyp-actions">
				<a href="https://ck-fyp.streamlit.app/" target="_blank" class="primary">Open Live Demo</a>
				<a
					href="https://github.com/ckolavennu/student-dropout-risk-prediction-demo"
					target="_blank"
					class="secondary"
				>
					View GitHub Repo
				</a>
				<a href="/projects" class="secondary">Back to Projects</a>
			</div>
		</div>

		<div class="fyp-product-visual" aria-hidden="true">
			<div class="risk-card">
				<span>Prediction</span>
				<strong>Risk Score</strong>
				<div class="risk-ring">76%</div>
			</div>

			<div class="model-board">
				<div class="model-top"></div>
				<div class="model-kpis">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div class="model-bars">
					<span style="height: 62%"></span>
					<span style="height: 45%"></span>
					<span style="height: 86%"></span>
					<span style="height: 70%"></span>
				</div>
				<div class="model-line"></div>
			</div>
		</div>
	</div>

	<div class="meta-grid">
		<div>
			<span>Project Type</span>
			<strong>Machine Learning Dashboard</strong>
		</div>

		<div>
			<span>Current Status</span>
			<strong>Deployed Demo</strong>
		</div>

		<div>
			<span>Core Stack</span>
			<strong>Python · Scikit-learn · Streamlit</strong>
		</div>
	</div>

	<div class="content-card highlight-card">
		<h2>Project Summary</h2>
		<p>
			This final year project focuses on using machine learning to predict student dropout risk
			in higher education. The work includes dataset preparation, target encoding, feature
			processing, class imbalance handling, model training, evaluation, and dashboard deployment
			through Streamlit Community Cloud.
		</p>
	</div>

	<div class="two-column">
		<div class="content-card">
			<h2>Problem Statement</h2>
			<p>
				Higher education institutions need earlier visibility into students who may be likely to
				withdraw, so intervention and support can be planned before the issue becomes final. This
				project explores how predictive analytics can support that decision-making process.
			</p>
		</div>

		<div class="content-card">
			<h2>Dashboard Purpose</h2>
			<p>
				The deployed dashboard makes the model easier to understand by allowing users to explore
				student-level inputs, prediction outputs, and supporting visual insights in a simple web
				interface.
			</p>
		</div>
	</div>

	<div class="content-card">
		<h2>Technical Workflow</h2>
		<div class="fyp-workflow-grid">
			<div>
				<span>01</span>
				<strong>Data Preparation</strong>
				<p>Cleaned the dataset, handled missing values, fixed data types, and prepared features.</p>
			</div>

			<div>
				<span>02</span>
				<strong>Model Training</strong>
				<p>Built classification models for identifying withdrawal risk from selected student attributes.</p>
			</div>

			<div>
				<span>03</span>
				<strong>Evaluation</strong>
				<p>Reviewed performance using classification metrics suitable for imbalanced prediction.</p>
			</div>

			<div>
				<span>04</span>
				<strong>Deployment</strong>
				<p>Deployed a Streamlit dashboard so the model can be demonstrated interactively.</p>
			</div>
		</div>
	</div>

	<div class="content-card">
		<h2>Skills Demonstrated</h2>
		<div class="tags">
			<span>Python</span>
			<span>Data Cleaning</span>
			<span>Machine Learning</span>
			<span>Classification</span>
			<span>SMOTE / Imbalance Handling</span>
			<span>Streamlit Deployment</span>
		</div>
	</div>
</section>

<style>
	.fyp-page {
		position: relative;
		overflow: hidden;
	}

	.fyp-page > *:not(.fyp-page-orb) {
		position: relative;
		z-index: 2;
	}

	.fyp-page-orb {
		position: absolute;
		top: 130px;
		right: -120px;
		width: 430px;
		height: 430px;
		border-radius: 50%;
		background: #38bdf8;
		filter: blur(90px);
		opacity: 0.2;
		animation: driftOrb 13s ease-in-out infinite;
		pointer-events: none;
	}

	.fyp-hero-panel {
		display: grid;
		grid-template-columns: 1.05fr 0.95fr;
		gap: 34px;
		align-items: center;
		margin-top: 38px;
		border: 1px solid rgba(148, 163, 184, 0.18);
		border-radius: 34px;
		padding: 34px;
		background:
			radial-gradient(circle at top right, rgba(56, 189, 248, 0.16), transparent 42%),
			linear-gradient(rgba(15, 23, 42, 0.78), rgba(15, 23, 42, 0.78)) padding-box,
			linear-gradient(135deg, rgba(56, 189, 248, 0.55), rgba(244, 114, 182, 0.34)) border-box;
		box-shadow: 0 28px 90px rgba(0, 0, 0, 0.24);
	}

	.fyp-hero-panel h2 {
		margin: 0 0 14px;
		font-size: clamp(2rem, 4vw, 3.5rem);
		letter-spacing: -0.05em;
	}

	.fyp-hero-panel p:not(.status) {
		color: #cbd5e1;
		line-height: 1.8;
	}

	.fyp-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 26px;
	}

	.fyp-product-visual {
		position: relative;
		min-height: 360px;
	}

	.model-board,
	.risk-card {
		border: 1px solid rgba(148, 163, 184, 0.18);
		background: rgba(2, 6, 23, 0.52);
		box-shadow: 0 22px 70px rgba(0, 0, 0, 0.26);
		backdrop-filter: blur(18px);
	}

	.model-board {
		position: absolute;
		right: 0;
		bottom: 12px;
		width: min(380px, 92%);
		height: 250px;
		border-radius: 28px;
		padding: 20px;
		background:
			linear-gradient(rgba(2, 6, 23, 0.58), rgba(2, 6, 23, 0.58)),
			linear-gradient(rgba(148, 163, 184, 0.045) 1px, transparent 1px),
			linear-gradient(90deg, rgba(148, 163, 184, 0.045) 1px, transparent 1px);
		background-size: auto, 28px 28px, 28px 28px;
		animation: modelFloat 6s ease-in-out infinite;
	}

	.model-top {
		width: 68%;
		height: 18px;
		border-radius: 999px;
		background: linear-gradient(90deg, #38bdf8, #f472b6);
		margin-bottom: 16px;
	}

	.model-kpis {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}

	.model-kpis span {
		height: 48px;
		border-radius: 14px;
		background: rgba(148, 163, 184, 0.16);
	}

	.model-bars {
		position: absolute;
		left: 26px;
		right: 26px;
		bottom: 28px;
		display: flex;
		align-items: end;
		gap: 14px;
		height: 120px;
	}

	.model-bars span {
		flex: 1;
		border-radius: 999px 999px 8px 8px;
		background: linear-gradient(180deg, #38bdf8, rgba(56, 189, 248, 0.12));
		animation: barPulse 3s ease-in-out infinite;
	}

	.model-line {
		position: absolute;
		left: 28px;
		right: 28px;
		top: 132px;
		height: 2px;
		background: linear-gradient(90deg, #38bdf8, #a78bfa, #f472b6);
		transform: rotate(-7deg);
		box-shadow: 0 0 28px rgba(56, 189, 248, 0.42);
	}

	.risk-card {
		position: absolute;
		z-index: 4;
		left: 0;
		top: 24px;
		width: 172px;
		border-radius: 24px;
		padding: 18px;
		animation: riskFloat 5s ease-in-out infinite;
	}

	.risk-card span {
		color: #94a3b8;
		font-size: 0.78rem;
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.risk-card strong {
		display: block;
		margin: 8px 0 14px;
		color: #f8fafc;
		font-size: 1.2rem;
	}

	.risk-ring {
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

	.fyp-workflow-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 14px;
		margin-top: 18px;
	}

	.fyp-workflow-grid div {
		border: 1px solid rgba(148, 163, 184, 0.16);
		border-radius: 22px;
		padding: 18px;
		background: rgba(2, 6, 23, 0.35);
	}

	.fyp-workflow-grid span {
		color: #7dd3fc;
		font-weight: 900;
	}

	.fyp-workflow-grid strong {
		display: block;
		margin: 12px 0 8px;
		color: #f8fafc;
	}

	.fyp-workflow-grid p {
		margin: 0;
		color: #94a3b8;
		line-height: 1.65;
	}

	@keyframes modelFloat {
		0%, 100% {
			transform: translateY(0) rotate(-1deg);
		}

		50% {
			transform: translateY(-12px) rotate(1deg);
		}
	}

	@keyframes riskFloat {
		0%, 100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-10px);
		}
	}

	@media (max-width: 960px) {
		.fyp-hero-panel,
		.fyp-workflow-grid {
			grid-template-columns: 1fr;
		}

		.fyp-product-visual {
			min-height: 330px;
		}
	}

	@media (max-width: 560px) {
		.fyp-hero-panel {
			padding: 24px;
		}

		.risk-card {
			display: none;
		}

		.model-board {
			position: relative;
			width: auto;
		}
	}
</style>
