import { Slice } from "./Slice";

export class Flight {
    public price: number;
    public slices: Slice[];
    private id: string;

    constructor({price, slices}) {
        this.price = price;
        this.slices = slices;
    }

    setId(id: string): void {
        this.id = id;
    };

    getId(): string {
        return this.id;
    }

    isEqual(flight: Flight): boolean {
        return flight.getId() === this.id;
    }
}
