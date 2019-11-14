export class Movie{
    constructor(
		public name: string,
		public language : string,
		public director : string,
		public producer : string,
        public cast : Array<string>,
		public synopsis : string,
		public rating : string
		
    ) { }
}