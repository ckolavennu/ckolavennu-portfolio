<script>
	import { page } from '$app/state';

	const links = [
		{ label: 'About', href: '/about' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'Resume', href: '/resume' },
		{ label: 'Contact', href: '/contact' }
	];

	function isActive(href) {
		return page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
	}
</script>

<nav class="navbar">
	<a href="/" class="logo" class:active={page.url.pathname === '/'}>CK</a>

	<div class="nav-links">
		{#each links as link}
			<a href={link.href} class:active={isActive(link.href)}>{link.label}</a>
		{/each}
	</div>
</nav>