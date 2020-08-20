export class Slice {
    public originName: string;
    public destinationName: string;
    public duration: number;
    public flightNumber: string;
    public departureDateTimeUTC: string;
    public arrivalDateTimeUTC: string;

    constructor({flightNumber, departureDateTimeUTC, arrivalDateTimeUTC}) {
        this.flightNumber = flightNumber;
        this.departureDateTimeUTC = departureDateTimeUTC;
        this.arrivalDateTimeUTC = arrivalDateTimeUTC;
    }

}
