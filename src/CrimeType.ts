export default class CrimeType {
	public readonly name: string;
	public readonly id: number;
	constructor(id: number, name: string) {
		this.name = name;
		this.id = id;
	}
}

