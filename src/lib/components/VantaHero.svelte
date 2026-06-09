<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let vantaRef;
	let effect;

	onMount(async () => {
		const module = await import('vanta/src/vanta.net');
		const NET = module.default;

		effect = NET({
			el: vantaRef,
			THREE,
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0,
			scale: 1.0,
			scaleMobile: 1.0,
			color: 0x38bdf8,
			backgroundColor: 0x020617,
			points: 7.0,
			maxDistance: 18.0,
			spacing: 22.0,
			showDots: true
		});

		return () => {
			if (effect) effect.destroy();
		};
	});
</script>

<div bind:this={vantaRef} class="vanta-hero-bg"></div>