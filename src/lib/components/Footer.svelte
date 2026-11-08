<script lang="ts">
	import { site } from '#lib/data/site';
	import { links } from '#lib/data/links';
	import { GitBranch, BriefcaseBusiness, X } from '@lucide/svelte';
</script>

<footer class="border-t border-[#d8dadd] bg-[#f7f7f5] py-16">
	<div class="mx-auto max-w-6xl px-5 md:px-8">
		<div class="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
			<div>
				<p class="font-display text-3xl uppercase tracking-[-0.08em] text-[#2b2d31]">{site.name}</p>
				<p class="mt-4 max-w-xs text-sm leading-relaxed text-[#5a6068]">
					Senior Backend Developer specializing in scalable systems, payment gateways, and robust API architectures.
				</p>
			</div>

			<div>
				<p class="font-condensed text-xl uppercase tracking-[0.18em] text-[#2b2d31]">Quick Links</p>
				<ul class="mt-4 space-y-2 text-sm text-[#5a6068]">
					{#each site.navItems as item}
						<li>
							<a href={item.href} class="hover:text-[#2b2d31]">{item.label}</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<p class="font-condensed text-xl uppercase tracking-[0.18em] text-[#2b2d31]">Services</p>
				<ul class="mt-4 space-y-2 text-sm text-[#5a6068]">
					{#each site.services as service}
						<li>{service}</li>
					{/each}
				</ul>
			</div>

			<div>
				<p class="font-condensed text-xl uppercase tracking-[0.18em] text-[#2b2d31]">Contact</p>
				<ul class="mt-4 space-y-2 text-sm text-[#5a6068]">
					<li><a href={`mailto:${links.email}`} class="hover:text-[#2b2d31]">{links.email}</a></li>
					<li><a href={`tel:${links.phoneFooter}`} class="hover:text-[#2b2d31]">{links.phoneFooter}</a></li>
					<li>Abuja, Nigeria</li>
				</ul>
				<div class="mt-5 flex gap-3">
					<a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" class="flex h-10 w-10 items-center justify-center border border-[#d8dadd] text-[#2b2d31] hover:bg-[#2b2d31] hover:text-[#f7f7f5]">
						<BriefcaseBusiness size={16} />
					</a>
					<a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" class="flex h-10 w-10 items-center justify-center border border-[#d8dadd] text-[#2b2d31] hover:bg-[#2b2d31] hover:text-[#f7f7f5]">
						<GitBranch size={16} />
					</a>
					<a href={links.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" class="flex h-10 w-10 items-center justify-center border border-[#d8dadd] text-[#2b2d31] hover:bg-[#2b2d31] hover:text-[#f7f7f5]">
						<X size={16} />
					</a>
				</div>
			</div>
		</div>

		<div class="mt-10 border-t border-[#d8dadd] pt-6 text-sm text-[#5a6068]">
			© 2026 Seun Adeniyi. All rights reserved.
		</div>
	</div>
</footer>
