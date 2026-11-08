<script lang="ts">
	import { testimonials } from '#lib/data/testimonials';
	import Card from '#lib/components/ui/card.svelte';
</script>

<section id="testimonials" class="scroll-mt-24 border-t border-[#d8dadd] py-24 md:py-40">
	<div class="mx-auto max-w-6xl px-5 md:px-8">
		<div class="mb-10 max-w-2xl">
			<h2 class="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-[-0.08em] text-[#2b2d31]">Client Testimonials</h2>
			<p class="mt-4 text-lg leading-relaxed text-[#5a6068]">Don't just take my word for it. Here's what clients and colleagues say about working with me.</p>
		</div>

		<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
			{#each testimonials as testimonial}
				<Card class="relative h-full overflow-hidden">
					<div class="mb-6 flex items-center justify-between">
						<div class="flex h-12 w-12 items-center justify-center border border-[#d8dadd] bg-[#2b2d31] font-condensed text-lg uppercase tracking-[0.14em] text-[#f7f7f5]">
							{testimonial.initials}
						</div>
						<div class="text-right">
							<p class="font-condensed text-sm uppercase tracking-[0.18em] text-[#5a6068]">{testimonial.name}</p>
							<p class="mt-1 text-xs uppercase tracking-[0.12em] text-[#5a6068]">{testimonial.role}</p>
						</div>
					</div>
					<div class="relative">
						<p class="text-3xl leading-none text-[#d8dadd]">“</p>
						<p class="mt-2 text-[1.05rem] leading-relaxed text-[#2b2d31]">{testimonial.quote}</p>
					</div>
				</Card>
			{/each}
		</div>
	</div>
</section>
