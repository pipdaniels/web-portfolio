<script lang="ts">
	import Button from '#lib/components/ui/button.svelte';
	import { site } from '#lib/data/site';
	import { links } from '#lib/data/links';
	import { ArrowDownRight } from '@lucide/svelte';
</script>

<section id="home" class="scroll-mt-24">
	<div class="mx-auto max-w-6xl px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-14">
		<div class="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
			<div class="space-y-6">
				<div class="overflow-hidden bg-[#2b2d31] p-4 md:p-6">
					<h1 class="font-display text-[clamp(3.5rem,14vw,11rem)] leading-[0.88] tracking-[-0.08em] text-[#f7f7f5]">
						Seun<br /> Adeniyi
					</h1>
				</div>
				<div class="h-1.5 w-full bg-[#ff6b4a]" aria-hidden="true"></div>
				<div class="space-y-3">
					<p class="font-condensed text-3xl uppercase tracking-[0.12em] text-[#2b2d31] md:text-4xl">
						Senior Backend Developer &amp; System Architect
					</p>
				</div>
			</div>

			<div class="flex flex-col gap-6 md:items-end">
				<div class="space-y-4 md:max-w-md">
					<p class="text-balance text-lg leading-relaxed text-[#5a6068]">
						{site.heroBody}
					</p>
				</div>
				<div class="flex flex-wrap gap-3">
					<a href="#projects">
						<Button class="bg-[#ff6b4a] text-[#2b2d31] hover:bg-[#ea5d3d]">View My Work</Button>
					</a>
					<a href={links.cv} download>
						<Button variant="outline">Download CV</Button>
					</a>
				</div>
			</div>
		</div>

		<div class="mt-8 flex items-center gap-3 text-[#5a6068]">
			<div class="flex h-10 w-10 items-center justify-center border border-[#d8dadd] bg-[#f7f7f5]">
				<ArrowDownRight size={16} />
			</div>
			<span class="font-mono text-[11px] uppercase tracking-[0.2em]">Scroll Down</span>
		</div>
	</div>
</section>
