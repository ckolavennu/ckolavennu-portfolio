<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="site-shell">
	<Navbar />

	<main class="site-main">
		<slot />
	</main>

	<Footer />
</div>