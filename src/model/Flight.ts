import { Slice } from "./Slice";

export class Flight {
    public price: number;
    public slices: Slice[];

    constructor({price, slices}) {
        this.price = price;
        this.slices = slices;
    }
}
