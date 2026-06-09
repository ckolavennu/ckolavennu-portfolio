<script>
	const tracks = [
		{
			id: 'ta',
			label: 'TA Journey',
			count: '6 roles',
			items: [
				{
					title: 'TA Trainee',
					period: 'Dec 2022 – Mar 2023',
					organization: 'Asia Pacific University of Technology & Innovation',
					type: 'Campus Role',
					summary:
						'This was my starting point in the Technical Assistant team, where I was introduced to lab operations, technical support, and the expectations of supporting students, lecturers, and campus systems.',
					responsibilities: [
						'Assisted with basic lab support and day-to-day technical operations.',
						'Supported students and staff with common technical issues.',
						'Learned standard Technical Assistant procedures and operational expectations.'
					],
					skills: ['Technical Support', 'Lab Operations', 'Communication', 'Troubleshooting'],
					images: []
				},
				{
					title: 'Technical Assistant',
					period: 'Mar 2023 – May 2026',
					organization: 'Asia Pacific University of Technology & Innovation',
					type: 'Part-time',
					summary:
						'As a Technical Assistant, I supported daily academic and technical operations across university labs and facilities. This role helped me build consistency, responsibility, and hands-on experience in a fast-moving support environment.',
					responsibilities: [
						'Supported lab operations, technical setups, and student-facing assistance.',
						'Helped maintain smooth usage of lab facilities and related systems.',
						'Communicated issues clearly and followed up when support was required.'
					],
					skills: ['Technical Support', 'Helpdesk Support', 'Lab Operations', 'Problem Solving'],
					images: ['/images/experience/ta-group.jpg']
				},
				{
					title: 'Member of HR',
					period: 'Oct 2023 – May 2024',
					organization: 'Technical Assistant Team, APU',
					type: 'Functional Unit Role',
					summary:
						'This role introduced me to the people-management side of the Technical Assistant team. I was involved in recruitment support, manpower planning, and internal coordination.',
					responsibilities: [
						'Supported recruitment-related activities for the Technical Assistant team.',
						'Assisted with manpower planning and internal coordination.',
						'Helped with team wellbeing and HR-related support tasks.'
					],
					skills: ['Recruitment', 'Team Coordination', 'Resource Management', 'Planning'],
					images: []
				},
				{
					title: 'Head of HR',
					period: 'May 2024 – Feb 2025',
					organization: 'Technical Assistant Team, APU',
					type: 'Leadership Role',
					summary:
						'As Head of HR, I moved from supporting HR activities to leading them. This role involved people-focused responsibilities, recruitment planning, and coordination within the Technical Assistant team.',
					responsibilities: [
						'Led HR-related activities within the Technical Assistant team.',
						'Supported recruitment planning, manpower allocation, and team coordination.',
						'Helped manage communication between HR members and other team leads.'
					],
					skills: ['People Management', 'Team Leadership', 'Recruitment', 'Coordination'],
					images: ['/images/experience/ta-head-hr.jpg']
				},
				{
					title: 'TA Secretary',
					period: 'Feb 2025 – Jan 2026',
					organization: 'Technical Assistant Team, APU',
					type: 'Administrative Leadership Role',
					summary:
						'As Technical Assistant Secretary, I handled coordination, documentation, and communication responsibilities within the team. This role pushed me to become more organized and helped me understand how important clear communication is in keeping a large team running smoothly.',
					responsibilities: [
						'Supported clerical and administrative coordination for the Technical Assistant team.',
						'Helped ensure tasks, updates, and internal communication were properly followed up.',
						'Coordinated between Technical Assistants, leadership members, and Technology Services staff.'
					],
					skills: ['Administration', 'Communication', 'Project Scheduling', 'Documentation'],
					images: ['/images/experience/ta-secretary.jpg']
				},
				{
					title: 'Lab Chief',
					period: 'Jan 2026 – May 2026',
					organization: 'Technical Assistant Team, APU',
					type: 'Leadership Role',
					summary:
						'As Lab Chief, I took on a higher level of responsibility in managing and administering hierarchy levels within the Technical Assistant team. The role involved resource allocation, communication, and operational coordination.',
					responsibilities: [
						'Managed and administered hierarchy levels within the Technical Assistant team.',
						'Supported task and resource allocation for Technical Assistants.',
						'Acted as a communication link between Technology Services staff and Technical Assistants.'
					],
					skills: ['Risk Assessment', 'Project Management', 'Resource Allocation', 'Leadership'],
					images: ['/images/experience/ta-group.jpg']
				}
			]
		},
		{
			id: 'internships',
			label: 'Internships',
			count: '2 roles',
			items: [
				{
					title: 'IT Intern',
					period: 'May 2024 – Jun 2024',
					organization: 'Asia Pacific University of Technology & Innovation',
					type: 'Internship',
					summary:
						'During my IT internship, I gained exposure to helpdesk operations, lab deployment, and server maintenance support. This helped me understand the technical operations behind university IT services.',
					responsibilities: [
						'Assisted with helpdesk operations and common IT support tasks.',
						'Supported lab deployment activities.',
						'Assisted with server maintenance and related technical tasks.'
					],
					skills: ['Helpdesk Support', 'Customer Service', 'Lab Operations', 'IT Support'],
					images: []
				},
				{
					title: 'Data Visualization and Reporting Intern',
					period: 'Jun 2025 – Sep 2025',
					organization: 'Asia Pacific University of Technology & Innovation',
					type: 'Internship',
					summary:
						'This internship connected directly with my data analytics direction. I worked with data extraction, validation, visualization, and reporting tasks to help transform raw information into clearer outputs for analysis and decision-making.',
					responsibilities: [
						'Assisted with data extraction and preparation tasks.',
						'Supported data validation to improve accuracy and reliability.',
						'Created or contributed to visual reporting outputs.'
					],
					skills: ['Data Extraction', 'Data Visualization', 'Data Validation', 'Reporting'],
					images: []
				}
			]
		},
		{
			id: 'isa',
			label: 'ISA Journey',
			count: '2 roles',
			items: [
				{
					title: 'Vice President',
					period: 'Sep 2023 – Oct 2024',
					organization: "APU's Indian Student Association",
					type: 'Student Leadership Role',
					summary:
						'As Vice President, I supported the leadership team in organizing student activities, coordinating members, and representing the association during cultural and community events.',
					responsibilities: [
						'Supported planning and execution of ISA activities and events.',
						'Coordinated with committee members and volunteers.',
						'Assisted in managing event logistics, communication, and student engagement.'
					],
					skills: ['Leadership', 'Teamwork', 'Event Coordination', 'Community Engagement'],
					images: ['/images/experience/isa-vp-1.jpg', '/images/experience/isa-vp-2.jpg']
				},
				{
					title: 'President',
					period: 'Oct 2024 – Oct 2025',
					organization: "APU's Indian Student Association",
					type: 'Student Leadership Role',
					summary:
						'As President, I led the association, represented the student community, and coordinated events with committee members, university staff, and external participants.',
					responsibilities: [
						'Led the association and coordinated committee-level responsibilities.',
						'Represented the Indian student community during university and cultural events.',
						'Worked with team members to manage activities, responsibilities, and student engagement.'
					],
					skills: ['Leadership', 'Public Speaking', 'Team Management', 'Event Planning'],
					images: ['/images/experience/isa-president-1.jpg', '/images/experience/isa-president-2.jpg']
				}
			]
		},
		{
			id: 'ieee',
			label: 'IEEE',
			count: '1 role',
			items: [
				{
					title: 'Vice Chair',
					period: '2022 – 2023',
					organization: 'IEEE APU Student Branch',
					type: 'Student Leadership Role',
					summary:
						'My role as Vice Chair in IEEE APU Student Branch was one of my earlier leadership experiences. It introduced me to student-led technical communities, committee work, collaboration, and event-oriented planning.',
					responsibilities: [
						'Supported committee-level planning and coordination.',
						'Assisted in student branch activities and community engagement.',
						'Worked with committee members to support events and initiatives.'
					],
					skills: ['Leadership', 'Teamwork', 'Committee Coordination', 'Technical Community'],
					images: ['/images/experience/ieee-vice-chair.jpeg']
				}
			]
		}
	];

	let activeTrackId = $state('ta');
	let activeItemIndex = $state(1);

	let activeTrack = $derived(tracks.find((track) => track.id === activeTrackId));
	let activeItem = $derived(activeTrack.items[activeItemIndex]);

	function selectTrack(trackId) {
		activeTrackId = trackId;
		activeItemIndex = 0;
	}
</script>

<section class="page about-page">
	<div class="about-hero">
		<div>
			<p class="eyebrow">About Me</p>

			<h1>My journey through technical support, leadership, and data work.</h1>

			<p class="subtitle">
				I’m Chandu Kolavennu, a Computer Science student specialising in Data Analytics. My
				university journey has involved technical assistant work, student leadership, HR
				coordination, internships, reporting, and community roles.
			</p>
		</div>

		<div class="identity-card">
			<span>Currently building towards</span>
			<strong>Data Analyst roles</strong>

			<div class="identity-tags">
				<p>Technical Assistant</p>
				<p>Student Leader</p>
				<p>Data Analytics</p>
			</div>
		</div>
	</div>

	<div class="journey-tabs">
		{#each tracks as track}
			<button
				class:active={activeTrackId === track.id}
				on:click={() => selectTrack(track.id)}
			>
				<span>{track.label}</span>
				<small>{track.count}</small>
			</button>
		{/each}
	</div>

	<div class="journey-layout">
		<div class="timeline-panel">
			<p class="panel-label">{activeTrack.label}</p>

			<div class="timeline-list">
				{#each activeTrack.items as item, index}
					<button
						class="timeline-item"
						class:active={activeItemIndex === index}
						on:click={() => (activeItemIndex = index)}
					>
						<span class="timeline-dot"></span>

						<div>
							<strong>{item.title}</strong>
							<small>{item.period}</small>
						</div>
					</button>
				{/each}
			</div>
		</div>

		<div class="experience-card">
			{#key activeItem.title}
				<div class="floating-card-inner">
					{#if activeItem.images.length > 0}
						<div class="experience-images" class:gallery={activeItem.images.length > 1}>
							{#each activeItem.images as image}
								<img src={image} alt={activeItem.title} />
							{/each}
						</div>
					{:else}
						<div class="no-image-block">
							<span>{activeTrack.label}</span>
							<strong>{activeItem.title}</strong>
						</div>
					{/if}

					<div class="experience-content">
						<p class="role-type">{activeItem.type}</p>

						<h2>{activeItem.title}</h2>

						<div class="role-meta">
							<span>{activeItem.organization}</span>
							<span>{activeItem.period}</span>
						</div>

						<p>{activeItem.summary}</p>

						<div class="responsibilities">
							<h3>Key responsibilities</h3>

							<ul>
								{#each activeItem.responsibilities as responsibility}
									<li>{responsibility}</li>
								{/each}
							</ul>
						</div>

						<div class="tags">
							{#each activeItem.skills as skill}
								<span>{skill}</span>
							{/each}
						</div>
					</div>
				</div>
			{/key}
		</div>
	</div>

	<div class="reflection-grid">
		<div>
			<span>01</span>
			<h3>Leadership</h3>
			<p>Leading committees, coordinating people, and taking responsibility for outcomes.</p>
		</div>

		<div>
			<span>02</span>
			<h3>Operations</h3>
			<p>Supporting technical, administrative, and event-based operations in real settings.</p>
		</div>

		<div>
			<span>03</span>
			<h3>Communication</h3>
			<p>Working between students, staff, teams, and stakeholders clearly and consistently.</p>
		</div>

		<div>
			<span>04</span>
			<h3>Data & Reporting</h3>
			<p>Building towards analytics work through reporting, validation, and visualization.</p>
		</div>
	</div>
</section>