<script>
	import VantaHero from '$lib/components/VantaHero.svelte';
</script>

<section class="hero hero-dynamic hero-with-vanta">
	<VantaHero />

	<div class="hero-copy">
		<p class="eyebrow">ckolavennu.live</p>

		<h1>
			I turn messy data and real experiences into
			<span class="gradient-text">clear stories.</span>
		</h1>

		<p class="subtitle">
			I’m Chandu Kolavennu, an aspiring Data Analyst and Computer Science student. My work
			combines data analytics, reporting, technical support, student leadership, and real-world
			coordination experience.
		</p>

		<div class="buttons">
			<a href="/about" class="primary">Explore My Journey</a>
			<a href="/projects" class="secondary">View Projects</a>
		</div>

		<div class="quick-stats">
			<div>
				<strong>3+ yrs</strong>
				<span>Technical Assistant journey</span>
			</div>

			<div>
				<strong>2</strong>
				<span>Internship experiences</span>
			</div>

			<div>
				<strong>Data</strong>
				<span>Analytics focus</span>
			</div>
		</div>
	</div>

	<div class="hero-visual">
		<div class="orbit orbit-one"></div>
		<div class="orbit orbit-two"></div>

		<div class="profile-card">
			<img src="/images/profile.jpeg" alt="Chandu Kolavennu" />
		</div>

		<div class="icon-orbit" aria-hidden="true">
			<div class="icon-bubble bubble-chart">
				<svg viewBox="0 0 64 64" fill="none">
					<rect x="13" y="31" width="8" height="17" rx="4" fill="#38BDF8" />
					<rect x="27" y="24" width="8" height="24" rx="4" fill="#7DD3FC" />
					<rect x="41" y="18" width="8" height="30" rx="4" fill="#A78BFA" />
					<path
						d="M14 22L26 18L38 24L50 14"
						stroke="#F8FAFC"
						stroke-width="4"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>

			<div class="icon-bubble bubble-excel">
				<svg viewBox="0 0 64 64" fill="none">
					<rect
						x="18"
						y="14"
						width="28"
						height="36"
						rx="8"
						fill="#0F172A"
						stroke="#38BDF8"
						stroke-width="2.5"
					/>
					<rect x="22" y="18" width="12" height="28" rx="5" fill="#38BDF8" fill-opacity="0.18" />
					<path
						d="M26 26L30 32L26 38"
						stroke="#F8FAFC"
						stroke-width="3.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path d="M38 24H42M38 31H42M38 38H42" stroke="#A78BFA" stroke-width="3" stroke-linecap="round" />
				</svg>
			</div>

			<div class="icon-bubble bubble-python">
				<svg viewBox="0 0 64 64" fill="none">
					<path
						d="M28 16H36C42.0751 16 47 20.9249 47 27V31H31C27.6863 31 25 28.3137 25 25V19C25 17.3431 26.3431 16 28 16Z"
						fill="#38BDF8"
					/>
					<circle cx="38.5" cy="22.5" r="1.8" fill="#020617" />
					<path
						d="M36 48H28C21.9249 48 17 43.0751 17 37V33H33C36.3137 33 39 35.6863 39 39V45C39 46.6569 37.6569 48 36 48Z"
						fill="#A78BFA"
					/>
					<circle cx="25.5" cy="41.5" r="1.8" fill="#020617" />
				</svg>
			</div>

			<div class="icon-bubble bubble-powerbi">
				<svg viewBox="0 0 64 64" fill="none">
					<rect x="16" y="30" width="7" height="16" rx="3.5" fill="#7DD3FC" />
					<rect x="26" y="24" width="7" height="22" rx="3.5" fill="#38BDF8" />
					<rect x="36" y="18" width="7" height="28" rx="3.5" fill="#A78BFA" />
					<rect x="46" y="12" width="7" height="34" rx="3.5" fill="#F472B6" />
					<path d="M16 49H52" stroke="#F8FAFC" stroke-width="3" stroke-linecap="round" />
				</svg>
			</div>

			<div class="icon-bubble bubble-pie">
				<svg viewBox="0 0 64 64" fill="none">
					<circle cx="32" cy="32" r="15" fill="#0F172A" stroke="#F8FAFC" stroke-width="2.5" />
					<path d="M32 32V17C39.732 17 46 23.268 46 31H32Z" fill="#38BDF8" />
					<path d="M32 32L44.5 39.5C41.9 44.7 37.4 47 32 47C23.716 47 17 40.284 17 32H32Z" fill="#A78BFA" />
				</svg>
			</div>

			<div class="icon-bubble bubble-search">
				<svg viewBox="0 0 64 64" fill="none">
					<circle cx="28" cy="28" r="12" stroke="#F8FAFC" stroke-width="4" />
					<path d="M37 37L47 47" stroke="#A78BFA" stroke-width="4" stroke-linecap="round" />
					<path
						d="M22 30L26 26L30 29L35 23"
						stroke="#38BDF8"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
		</div>
	</div>
</section>

<div class="section-divider"></div>

<section class="section">
	<div class="section-heading">
		<p class="eyebrow">Featured Experience</p>
		<h2>Built through technical work, leadership, and reporting.</h2>
	</div>

	<div class="experience-preview-grid">
		<a href="/about" class="experience-preview-card">
			<p class="status">TA Journey</p>
			<h3>From Trainee to Lab Chief</h3>
			<p>
				A progression across technical support, HR, administration, coordination, and lab
				operations within the Technical Assistant team.
			</p>
			<span>Explore timeline →</span>
		</a>

		<a href="/about" class="experience-preview-card">
			<p class="status">Student Leadership</p>
			<h3>ISA Vice President & President</h3>
			<p>
				Leadership experience through community representation, cultural event coordination,
				teamwork, and public speaking.
			</p>
			<span>View leadership roles →</span>
		</a>

		<a href="/about" class="experience-preview-card">
			<p class="status">Internships</p>
			<h3>IT & Data Visualization</h3>
			<p>
				Experience in IT support, data extraction, validation, visualization, and reporting
				workflows.
			</p>
			<span>See internships →</span>
		</a>
	</div>
</section>

<section class="section">
	<div class="section-heading">
		<p class="eyebrow">Selected Work</p>
		<h2>Projects with practical problem-solving in mind.</h2>
	</div>

	<div class="project-grid improved-projects">
		<a href="/projects/foodbasket" class="project-card featured">
			<div class="project-card-top">
				<p class="status">In Progress</p>
				<span>01</span>
			</div>

			<h3>Foodbasket Analytics</h3>

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

			<span class="card-link">View Case Study →</span>
		</a>

		<a href="/projects/student-dropout" class="project-card">
			<div class="project-card-top">
				<p class="status">Planned</p>
				<span>02</span>
			</div>

			<h3>Student Dropout Risk Prediction</h3>

			<p>
				A machine learning-based predictive analytics project focused on identifying students
				at risk of withdrawal in higher education.
			</p>

			<div class="tags">
				<span>Python</span>
				<span>ML</span>
				<span>Classification</span>
				<span>Streamlit</span>
			</div>

			<span class="card-link">Coming Soon →</span>
		</a>

		<a href="/projects" class="project-card">
			<div class="project-card-top">
				<p class="status">Coming Soon</p>
				<span>03</span>
			</div>

			<h3>Project 3</h3>

			<p>
				A third analytics project focused on solving a real-world problem using structured
				analysis, visualisation, and insight communication.
			</p>

			<div class="tags">
				<span>SQL</span>
				<span>Analytics</span>
				<span>Visualisation</span>
			</div>

			<span class="card-link">Explore Projects →</span>
		</a>
	</div>
</section>

<section class="section">
	<div class="section-heading">
		<p class="eyebrow">Toolkit</p>
		<h2>Tools I use to analyse, build, and communicate.</h2>
	</div>

	<div class="toolkit-grid">
		<div>
			<h3>Data Analysis</h3>
			<p>Python, SQL, Excel, Pandas, NumPy</p>
		</div>

		<div>
			<h3>Visualisation</h3>
			<p>Power BI, Tableau, Matplotlib, Streamlit</p>
		</div>

		<div>
			<h3>Machine Learning</h3>
			<p>Scikit-learn, classification models, evaluation metrics</p>
		</div>

		<div>
			<h3>Web & Tools</h3>
			<p>SvelteKit, GitHub, VS Code, Jupyter Notebook</p>
		</div>
	</div>
</section>

<section class="cta-panel">
	<p class="eyebrow">Let’s Connect</p>

	<h2>Interested in my work?</h2>

	<p>
		I’m building towards data analyst roles and opportunities where I can combine analytical
		thinking, clear communication, and practical problem-solving.
	</p>

	<div class="buttons">
		<a href="/contact" class="primary">Contact Me</a>
		<a href="/resume" class="secondary">View Resume</a>
	</div>
</section>
