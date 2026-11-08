<script lang="ts">
	import { cn } from '#lib/utils';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type Variant = 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
	type Size = 'default' | 'sm' | 'lg' | 'icon';

	interface Props extends HTMLButtonAttributes {
		variant?: Variant;
		size?: Size;
		class?: string;
	}

	let {
		variant = 'default',
		size = 'default',
		class: className = '',
		type = 'button',
		children,
		...rest
	}: Props = $props();

	const base =
		'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

	const variants = {
		default: 'bg-[#2b2d31] text-[#f7f7f5] hover:bg-[#1d1f23]',
		secondary: 'bg-[#d8dadd] text-[#2b2d31] hover:bg-[#c7cbd0]',
		outline: 'border border-[#2b2d31] bg-transparent text-[#2b2d31] hover:bg-[#2b2d31] hover:text-[#f7f7f5]',
		ghost: 'text-[#2b2d31] hover:bg-[#d8dadd]',
		link: 'text-[#2b2d31] underline-offset-4 hover:underline'
	};

	const sizes = {
		default: 'h-11 px-5',
		sm: 'h-9 px-3 text-xs',
		lg: 'h-12 px-6 text-base',
		icon: 'h-10 w-10 p-0'
	};

	let classes = $derived(cn(base, variants[variant], sizes[size], className));
</script>

<button {type} class={classes} {...rest}>
	{@render children?.()}
</button>
