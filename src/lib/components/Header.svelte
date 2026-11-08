<script lang="ts">
	import Button from '#lib/components/ui/button.svelte';
	import { site } from '#lib/data/site';
	import { Menu, X } from '@lucide/svelte';
	let mobileOpen = false;
</script>

<header class="sticky top-0 z-50 border-b border-[#d8dadd] bg-[#f7f7f5]/95 backdrop-blur-sm">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
		<a href="#home" class="font-display text-2xl leading-none text-[#2b2d31]" aria-label="Seun Adeniyi home">Seun Adeniyi</a>

		<nav class="hidden items-center gap-6 md:flex" aria-label="Main navigation">
			{#each site.navItems as item}
				<a href={item.href} class="font-condensed text-lg uppercase tracking-[0.18em] text-[#5a6068] transition-colors hover:text-[#2b2d31]">
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="hidden md:block">
			<a href="#contact" class="inline-flex items-center border border-[#2b2d31] px-4 py-2 font-condensed text-lg uppercase tracking-[0.18em] text-[#2b2d31] transition-colors hover:bg-[#2b2d31] hover:text-[#f7f7f5]">
				Let's Talk
			</a>
		</div>

		<div class="md:hidden">
			<Button variant="ghost" size="icon" aria-label="Toggle menu" onclick={() => (mobileOpen = !mobileOpen)}>
				{#if mobileOpen}
					<X size={20} />
				{:else}
					<Menu size={20} />
				{/if}
			</Button>
		</div>
	</div>

	{#if mobileOpen}
		<div class="border-t border-[#d8dadd] bg-[#f7f7f5] md:hidden">
			<nav class="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 md:px-8" aria-label="Mobile navigation">
				{#each site.navItems as item}
					<a
						href={item.href}
						class="font-condensed text-lg uppercase tracking-[0.18em] text-[#5a6068] hover:text-[#2b2d31]"
						on:click={() => (mobileOpen = false)}
					>
						{item.label}
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</header>
