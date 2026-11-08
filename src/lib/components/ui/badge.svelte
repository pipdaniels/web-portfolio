<script lang="ts">
	import { cn } from '#lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		variant?: 'default' | 'secondary' | 'outline';
		class?: string;
	}

	let { variant = 'default', class: className = '', children, ...rest }: Props = $props();

	const variants = {
		default: 'border border-[#d8dadd] bg-[#2b2d31] text-[#f7f7f5]',
		secondary: 'bg-[#d8dadd] text-[#2b2d31]',
		outline: 'border border-[#d8dadd] bg-transparent text-[#5a6068]'
	};

	let classes = $derived(cn('inline-flex items-center rounded-none border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em]', variants[variant], className));
</script>

<span {...rest} class={classes}>
	{@render children?.()}
</span>
