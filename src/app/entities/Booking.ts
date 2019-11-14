export class Booking {
    constructor(
		public name: string,
		public city: string,
		public showLocation : string,
		public bookingDate : string,
        public timing : string,
		public ticketType : string,
		public ticketCount : number
		
    ) { }
}