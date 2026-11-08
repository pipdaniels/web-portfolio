<script lang="ts">
	import Header from '#lib/components/Header.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import TechStack from '#lib/components/TechStack.svelte';
	import Vision from '#lib/components/Vision.svelte';
	import StatsCounter from '#lib/components/StatsCounter.svelte';
	import Testimonials from '#lib/components/Testimonials.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import Newsletter from '#lib/components/Newsletter.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import Sonner from '#lib/components/ui/sonner.svelte';
</script>

<div class="min-h-screen bg-[#f7f7f5] text-[#2b2d31]">
	<Header />
	<main>
		<Hero />
		<TechStack />
		<Vision />
		<StatsCounter />
		<Testimonials />
		<Contact />
		<Newsletter />
	</main>
	<Footer />
	<Sonner />
</div>
