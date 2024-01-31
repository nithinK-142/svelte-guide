import { writable } from 'svelte/store';

function createCounter(count: number) {
	const { set, subscribe, update } = writable(count);

	function increment() {
		update((count: number) => count + 1);
	}
	function decrement() {
		update((count: number) => count - 1);
	}
	function reset() {
		set(0);
	}

	return { subscribe, increment, decrement, reset };
}

export const counter = createCounter(0);
