<script lang="ts">
	import Badge from '#lib/components/ui/badge.svelte';
	import Button from '#lib/components/ui/button.svelte';
	import Input from '#lib/components/ui/input.svelte';
	import { links } from '#lib/data/links';
	let email = '';

	function subscribe() {
		if (!email) return;
		window.location.href = `mailto:${links.email}?subject=${encodeURIComponent('Newsletter subscription')}&body=${encodeURIComponent(`Email: ${email}`)}`;
	}
</script>

<section class="border-t border-[#d8dadd] py-24 md:py-40">
	<div class="mx-auto max-w-6xl px-5 md:px-8">
		<div class="rounded-none border border-[#d8dadd] bg-[#f7f7f5] p-6 md:p-10">
			<div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
				<div>
					<h2 class="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-[-0.08em] text-[#2b2d31]">Stay Updated with My Journey</h2>
					<p class="mt-4 max-w-[65ch] text-lg leading-relaxed text-[#5a6068]">
						Get insights into backend development, payment systems architecture, and updates on my latest projects. No spam, just valuable content.
					</p>
				</div>

				<form class="space-y-4" on:submit|preventDefault={subscribe}>
					<div class="flex flex-col gap-3 sm:flex-row">
						<Input bind:value={email} type="email" placeholder="Your email address" aria-label="Your email address" class="min-w-0" />
						<Button type="submit" variant="secondary" class="w-full sm:w-auto">Subscribe</Button>
					</div>
					<div class="flex flex-wrap gap-2">
						<Badge variant="outline">Technical insights</Badge>
						<Badge variant="outline">Project updates</Badge>
						<Badge variant="outline">Industry trends</Badge>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
