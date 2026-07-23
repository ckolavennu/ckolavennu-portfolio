<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let vantaRef;
	let effect;

	onMount(() => {
		let cancelled = false;

		const createEffect = async () => {
			const module = await import('vanta/src/vanta.net');
			const NET = module.default;

			if (cancelled || !vantaRef) return;

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
				points: 9.0,
				maxDistance: 21.0,
				spacing: 24.0,
				showDots: true
			});
		};

		createEffect();

		return () => {
			cancelled = true;

			if (effect) {
				effect.destroy();
				effect = undefined;
			}
		};
	});
</script>

<div bind:this={vantaRef} class="vanta-hero-bg" aria-hidden="true"></div>
