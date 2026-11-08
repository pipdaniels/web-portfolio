<script lang="ts">
	import { site } from '#lib/data/site';
</script>

<section class="border-t border-[#d8dadd] py-24 md:py-40">
	<div class="mx-auto max-w-6xl px-5 md:px-8">
		<div class="mb-8 max-w-2xl">
			<h2 class="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-[-0.08em] text-[#2b2d31]">Proven Track Record</h2>
			<p class="mt-4 text-lg leading-relaxed text-[#5a6068]">Numbers that speak to the quality and reliability of my work</p>
		</div>

		<div class="grid gap-0 overflow-hidden border border-[#d8dadd] md:grid-cols-4">
			{#each site.stats as stat}
				<div class="flex min-h-[180px] flex-col justify-center border-b border-r border-[#d8dadd] p-6 last:border-r-0 md:border-b-0 md:last:border-r-0">
					<p class="font-display text-[clamp(2.6rem,6vw,5rem)] leading-none tracking-[-0.08em] text-[#2b2d31]">{stat.value}</p>
					<p class="mt-2 font-condensed text-lg uppercase tracking-[0.2em] text-[#5a6068]">{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
