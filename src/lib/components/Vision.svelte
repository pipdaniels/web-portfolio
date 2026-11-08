<script lang="ts">
	import Badge from '#lib/components/ui/badge.svelte';
	import Card from '#lib/components/ui/card.svelte';
	import { site } from '#lib/data/site';
	import { Circle } from '@lucide/svelte';
</script>

<section id="about" class="scroll-mt-24 border-t border-[#d8dadd] py-24 md:py-40">
	<div class="mx-auto max-w-6xl px-5 md:px-8">
		<div class="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
			<div>
				<h2 class="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-[-0.08em] text-[#2b2d31]">My Vision &amp; Philosophy</h2>
			</div>
			<div class="flex flex-wrap gap-2">
				<Badge variant="secondary" class="flex items-center gap-2">
					<span class="status-dot" aria-hidden="true"></span>
					<span>System Online</span>
				</Badge>
				<Badge variant="outline">Secure &amp; Scalable</Badge>
			</div>
		</div>

		<p class="mb-10 max-w-[65ch] text-lg leading-relaxed text-[#5a6068]">
			As a backend developer with expertise in payment systems and scalable architectures, I believe technology should empower businesses to achieve their goals efficiently and securely.
		</p>

		<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
			{#each site.vision as item, index}
				<Card class="relative h-full border-0 border-b border-[#d8dadd] bg-transparent p-0 pb-4">
					<div class="mb-5 flex items-center justify-between border-b border-[#d8dadd] pb-4">
						<span class="font-display text-5xl leading-none text-[#d8dadd]">{String(index + 1).padStart(2, '0')}</span>
					</div>
					<h3 class="font-condensed text-3xl uppercase tracking-[0.1em] text-[#2b2d31]">{item.title}</h3>
					<p class="mt-4 text-base leading-relaxed text-[#5a6068]">{item.text}</p>
				</Card>
			{/each}
		</div>
	</div>
</section>
