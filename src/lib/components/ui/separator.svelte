<script lang="ts">
	import { cn } from '#lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		orientation?: 'horizontal' | 'vertical';
		class?: string;
	}

	let { orientation = 'horizontal', class: className = '', ...rest }: Props = $props();
	let classes = $derived(
		cn(
			'bg-[#d8dadd]',
			orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
			className
		)
	);
</script>

<div {...rest} class={classes} aria-hidden="true"></div>
