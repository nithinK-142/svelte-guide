<script>
	import { page } from '$app/stores';

	$: routeId = $page.route.id;

	const navLinks = [
		{ title: 'Home', href: '/' },
		{ title: 'About', href: '/about' },
		{ title: 'Contact', href: '/contact' }
	];
</script>

<nav class="pt-6">
	<div class="hidden space-x-4 md:flex">
		{#each navLinks as { title, href }}
			<a
				{href}
				class="text-gray-300 rounded-md px-3 py-2 text-sm font-medium hover:text-white {routeId ==
				href
					? 'bg-gray-900'
					: 'hover:bg-gray-700'}"
				aria-current="page">{title}</a
			>
		{/each}
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="md:hidden">
		<div class="px-2 pt-2 pb-3 space-y-1">
			{#each navLinks as { title, href }}
				<a
					{href}
					class="text-gray-300 block rounded-md px-3 py-2 text-base font-medium hover:text-white {routeId ==
					href
						? 'bg-gray-900'
						: 'hover:bg-gray-700'}"
					aria-current="page">{title}</a
				>
			{/each}
		</div>
	</div>
</nav>
