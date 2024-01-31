function createCounter(count: number) {
	const subscribers: Set<(count: number) => void> = new Set();

	// add subscriber
	function subscribe(subscriber: (count: number) => void): void {
		subscribers.add(subscriber);
	}

	// notify the subscribers
	function update(updater: (count: number) => number): void {
		set(updater(count));
	}

    // set a new count and notify subscribers
	function set(newValue: number): void {
		count = newValue;
		subscribers.forEach((subscriber) => subscriber(count));
	}

	return { subscribe, update, set };
}

export const counter = createCounter(0);
