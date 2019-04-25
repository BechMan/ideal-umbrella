const flight = (dateOut, dateIn, difference, number, direction) => ({dateOut, dateIn, difference, number, direction});


const flights = [
	flight(new Date(2019, 04, 21, 01, 35, 00), new Date(2019, 04, 22, 10, 35, 00), 325, "SU-244", "Moscow"), 
	flight(new Date(2019, 04, 21, 02, 50, 00), new Date(2019, 04, 22, 06, 55, 00), 0, "SU-2414", "Berlin"), 
	flight(new Date(2019, 04, 21, 04, 10, 00), new Date(2019, 04, 22, 14, 35, 00), 1515, "SU-2344", "Nowgorod"), 
	flight(new Date(2019, 04, 21, 05, 40, 00), new Date(2019, 04, 21, 22, 00, 00), 0, "SU-274", "Piter-Burg"), 
	flight(new Date(2019, 04, 21, 06, 15, 00), new Date(2019, 04, 22, 19, 10, 00), 80, "SU-2434", "Moscow"), 
	flight(new Date(2019, 04, 21, 02, 15, 00), new Date(2019, 04, 21, 04, 10, 00), 0, "SU-94", "Moscow"),
];



new Vue({
	el: "#app",
	data: {
		flights: flights,
		search: "",
		departure: true,
		arrival: true,
		difference: false,
		activeDifference: "btn-secondary",
	},
	methods:{
		arrivalButton(){
			this.arrival = true;
			this.departure = false;
		},
		departureButton(){
			this.arrival = false;
			this.departure = true;
		},
		allButton(){
			this.arrival = true;
			this.departure = true;
		},
		differenceButton(){
			this.difference = !this.difference;
			this.activeDifference = this.difference ? "btn-danger" : "btn-secondary";
		},
	},
	computed:{
		filteredFlights(){
			return this.flights.filter(
				flight => {
					arrival = (flight.direction == "Moscow") * this.arrival;
					departure = (flight.direction != "Moscow") * this.departure;
					number = flight.number.toLowerCase();
					direction = flight.direction.toLowerCase();
					search = this.search.toLowerCase();
					search = number.indexOf(search) > -1 || direction.indexOf(search) > -1;
					difference = (flight.difference > 0) * this.difference;
					return (arrival + departure) * search * !this.difference + difference * (arrival + departure) * search;
				}
			);
		},
	},
});
