<script lang="ts">
	import { counter } from '$lib/counter';

	let count = 0;

	counter.subscribe((value: number) => {
		count = value;
	});

	const increment = () => counter.update((count: number) => count + 1);
	const decrement = () => counter.update((count: number) => count - 1);
	const reset = () => counter.set(0);
</script>

<h1 class="pt-10 text-3xl text-center text-white/90">Welcome to SvelteKit Guide</h1>

<div class="flex flex-col items-center text-white">
	<h2 class="pt-10 text-5xl">Count is {count}</h2>
	<div class="flex gap-6 mt-4">
		<button on:click={decrement} class="px-3 pb-1 text-4xl rounded-md bg-white/10"> - </button>
		<button on:click={increment} class="px-3 pb-1 text-4xl rounded-md bg-white/10"> + </button>
		<button on:click={reset} class="px-4 pb-1 text-2xl rounded-md bg-white/10"> Reset </button>
	</div>
</div>
