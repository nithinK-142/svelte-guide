<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<svelte:head>
	<title>Svelte Guide</title>
</svelte:head>

<main class="h-screen bg-[#222] font-kanit flex flex-col items-center">
	<h1 class="pt-10 text-3xl text-center text-white">Welcome to SvelteKit Guide</h1>
	<Navbar />
	<slot />
</main>