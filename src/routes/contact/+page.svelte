<script>
	let copied = $state(false);

	async function copyEmail() {
		await navigator.clipboard.writeText('ckolavennu15648@gmail.com');
		copied = true;

		setTimeout(() => {
			copied = false;
		}, 1600);
	}
</script>

<section class="page contact-page">
	<div class="contact-orb"></div>

	<p class="eyebrow">Contact</p>

	<h1>Let’s Connect</h1>

	<p class="subtitle">
		I’m open to data analyst opportunities, internships, collaborations, and project discussions.
	</p>

	<div class="contact-list">
		<div class="contact-item contact-item-button">
			<div>
				<span>Email</span>
				<strong>ckolavennu15648@gmail.com</strong>
			</div>

			<button onclick={copyEmail}>{copied ? 'Copied!' : 'Copy Email'}</button>
		</div>

		<a href="https://github.com/ckolavennu" target="_blank" class="contact-item">
			<span>GitHub</span>
			<strong>github.com/ckolavennu</strong>
		</a>

		<a
			href="https://www.linkedin.com/in/ramachandra-rao-kolavennu-730a93230"
			target="_blank"
			class="contact-item"
		>
			<span>LinkedIn</span>
			<strong>LinkedIn Profile</strong>
		</a>
	</div>
</section>