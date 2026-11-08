<script lang="ts">
	import { cn } from '#lib/utils';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {
		class?: string;
	}

	let { class: className = '', value = $bindable(''), ...rest }: Props = $props();
	let classes = $derived(
		cn(
			'flex h-12 w-full border border-[#d8dadd] bg-transparent px-3 text-base text-[#2b2d31] placeholder:text-[#5a6068] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b4a] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
			className
		)
	);
</script>

<input bind:value class={classes} {...rest} />
