<script lang="ts">
	import Button from '#lib/components/ui/button.svelte';
	import Input from '#lib/components/ui/input.svelte';
	import Textarea from '#lib/components/ui/textarea.svelte';
	import { links } from '#lib/data/links';
	import { toast } from 'svelte-sonner';

	let name = '';
	let email = '';
	let subject = '';
	let message = '';

	const whatsappMessage =
		"Hello Seun, I came across your portfolio and I'd like to discuss a project with you. Are you available for a quick chat?";

	function handleSubmit() {
		const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
		const mailto = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailto;
		toast.info('Opening your email client…', {
			description: 'If your mail app does not open, copy the email address instead.',
			action: {
				label: 'Copy email address',
				onClick: async () => {
					await navigator.clipboard.writeText(links.email);
				}
			}
		});
	}
</script>

<section id="contact" class="scroll-mt-24 border-t border-[#d8dadd] py-24 md:py-40">
	<div class="mx-auto max-w-6xl px-5 md:px-8">
		<div class="mb-10 max-w-2xl">
			<h2 class="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-[-0.08em] text-[#2b2d31]">Let's Work Together</h2>
			<p class="mt-4 text-lg leading-relaxed text-[#5a6068]">
				Ready to build something amazing? I'm always open to discussing new opportunities and challenging projects. Let's turn your ideas into reality.
			</p>
		</div>

		<div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
			<form on:submit|preventDefault={handleSubmit} class="space-y-5 border border-[#d8dadd] bg-[#f7f7f5] p-5 md:p-8">
				<div class="grid gap-5 md:grid-cols-2">
					<div class="space-y-2">
						<label for="name" class="font-condensed text-sm uppercase tracking-[0.2em] text-[#5a6068]">Name</label>
						<Input id="name" bind:value={name} placeholder="Your name" required />
					</div>
					<div class="space-y-2">
						<label for="email" class="font-condensed text-sm uppercase tracking-[0.2em] text-[#5a6068]">Email</label>
						<Input id="email" type="email" bind:value={email} placeholder="your@email.com" required />
					</div>
				</div>

				<div class="space-y-2">
					<label for="subject" class="font-condensed text-sm uppercase tracking-[0.2em] text-[#5a6068]">Subject</label>
					<Input id="subject" bind:value={subject} placeholder="Project inquiry" required />
				</div>

				<div class="space-y-2">
					<label for="message" class="font-condensed text-sm uppercase tracking-[0.2em] text-[#5a6068]">Message</label>
					<Textarea id="message" bind:value={message} placeholder="Tell me about your project..." required />
				</div>

				<Button type="submit" class="bg-[#ff6b4a] text-[#2b2d31] hover:bg-[#ea5d3d]">Send Message</Button>
			</form>

			<div class="space-y-6">
				<div class="border border-[#d8dadd] bg-[#f7f7f5] p-5 md:p-8">
					<h3 class="font-condensed text-3xl uppercase tracking-[0.14em] text-[#2b2d31]">Get In Touch</h3>
					<div class="mt-6 space-y-4 text-[#5a6068]">
						<p><span class="font-condensed text-sm uppercase tracking-[0.2em] text-[#2b2d31]">Email:</span> <a href={`mailto:${links.email}`} class="underline-offset-4 hover:underline">{links.email}</a></p>
						<p><span class="font-condensed text-sm uppercase tracking-[0.2em] text-[#2b2d31]">Phone:</span> <a href={`tel:${links.phoneContact}`} class="underline-offset-4 hover:underline">{links.phoneContact}</a></p>
						<p><span class="font-condensed text-sm uppercase tracking-[0.2em] text-[#2b2d31]">Location:</span> Abuja, Nigeria</p>
					</div>
				</div>

				<div class="flex flex-col gap-3">
					<a href={`${links.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
						<Button variant="secondary" class="justify-center">Send WhatsApp Message</Button>
					</a>
					<a href={`mailto:${links.email}`}>
						<Button variant="outline" class="justify-center">Send Email Directly</Button>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
