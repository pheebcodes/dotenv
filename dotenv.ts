export class Dotenv {
	constructor(data: string) {
		throw new Error("Not implemented");
	}

	get(key: string): string {
		throw new Error("Not implemented");
	}
	set(key: string, value: string): void {
		throw new Error("Not implemented");
	}
	rename(key: string, newKey: string): void {
		throw new Error("Not implemented");
	}
	delete(key: string): string | null {
		throw new Error("Not implemented");
	}
	clean(key?: string): void {
		throw new Error("Not implemented");
	}

	toString(): string {
		throw new Error("Not implemented");
	}
}
