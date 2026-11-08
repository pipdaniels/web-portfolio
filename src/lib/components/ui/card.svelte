<script lang="ts">
	import { cn } from '#lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLElement> {
		class?: string;
	}

	let { class: className = '', children, ...rest }: Props = $props();
	let classes = $derived(cn('rounded-none border border-[#d8dadd] bg-[#f7f7f5] p-5 md:p-6', className));
</script>

<div {...rest} class={classes}>
	{@render children?.()}
</div>
