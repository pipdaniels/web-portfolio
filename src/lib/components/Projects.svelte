<script lang="ts">
	import { projects } from '#lib/data/projects';
	import { ArrowUpRight } from '@lucide/svelte';

	function splitTitle(title: string) {
		const [name, ...rest] = title.split(' - ');
		return {
			name: name ?? title,
			subtitle: rest.join(' - ')
		};
	}
</script>

<section id="projects" class="scroll-mt-24 border-t border-[#d8dadd] py-24 md:py-40">
	<div class="mx-auto max-w-6xl px-5 md:px-8">
		<div class="mb-10 max-w-2xl">
			<h2 class="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-[-0.08em] text-[#2b2d31]">
				Notable Projects
			</h2>
		</div>

		<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
			{#each projects as project}
				{@const parsedTitle = splitTitle(project.title)}
				<a
					href={project.href}
					target={project.external ? '_blank' : undefined}
					rel={project.external ? 'noopener noreferrer' : undefined}
					aria-label={`Open ${project.title}`}
					class="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b4a] focus-visible:ring-offset-2"
				>
					<article class="h-full border border-[#d8dadd] bg-[#f7f7f5] transition-transform duration-200 hover:-translate-y-1">
						<div class="overflow-hidden border-b border-[#d8dadd] bg-[#d8dadd]">
							<img
								src={project.image}
								alt={project.title}
								class="h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
							/>
						</div>

						<div class="p-5">
							<div class="mb-3 flex items-start justify-between gap-3">
								<div class="min-w-0">
									<h3 class="font-condensed text-[2rem] uppercase leading-none tracking-[0.12em] text-[#2b2d31]">
										<span class="block">{parsedTitle.name}</span>
										{#if parsedTitle.subtitle}
											<span class="mt-1 block text-[#5a6068]">{parsedTitle.subtitle}</span>
										{/if}
									</h3>
								</div>
								<div class="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d8dadd] text-[#2b2d31] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
									<ArrowUpRight size={18} />
								</div>
							</div>

							{#if project.tags.length}
								<div class="mb-4 flex flex-wrap gap-2">
									{#each project.tags as tag}
										<span class="border border-[#d8dadd] bg-[#f7f7f5] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#5a6068]">
											{tag}
										</span>
									{/each}
								</div>
							{/if}

							<p class="text-sm leading-relaxed text-[#5a6068]">{project.description}</p>
						</div>
					</article>
				</a>
			{/each}
		</div>
	</div>
</section>
