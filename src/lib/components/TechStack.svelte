<script lang="ts">
	import { stack } from '#lib/data/stack';
	import Card from '#lib/components/ui/card.svelte';
	import Badge from '#lib/components/ui/badge.svelte';
	import {
		Terminal,
		Palette,
		Database,
		Settings,
		Globe,
		Wrench
	} from '@lucide/svelte';

	const iconMap: Record<string, typeof Terminal> = {
		Terminal,
		Palette,
		Database,
		Settings,
		Globe,
		Wrench
	};
</script>

<section id="tech-stack" class="scroll-mt-24 border-t border-[#d8dadd] py-24 md:py-40">
	<div class="mx-auto max-w-6xl px-5 md:px-8">
		<div class="mb-10 max-w-2xl">
			<h2 class="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-[-0.08em] text-[#2b2d31]">Technology Stack</h2>
			<p class="mt-4 text-lg leading-relaxed text-[#5a6068]">
				A comprehensive toolkit for building robust, scalable systems and modern web applications
			</p>
		</div>

		<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
			{#each stack as item}
				{@const Icon = iconMap[item.icon] || Terminal}
				<Card class="h-full">
					<div class="mb-5 flex items-center justify-between border-b border-[#d8dadd] pb-4">
						<span class="font-condensed text-2xl uppercase tracking-[0.18em] text-[#2b2d31]">{item.category}</span>
						<div class="flex h-10 w-10 items-center justify-center border border-[#d8dadd] bg-[#2b2d31] text-[#f7f7f5]">
							<Icon size={18} />
						</div>
					</div>
					<div class="flex flex-wrap gap-2">
						{#each item.items as tool}
							<Badge variant="secondary">{tool}</Badge>
						{/each}
					</div>
				</Card>
			{/each}
		</div>
	</div>
</section>
