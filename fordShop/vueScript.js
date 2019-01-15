const car = (name, modal, owner, phone, image, year) => ({name, modal, owner, phone, image, year})
const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
	car('Ford', 'Focus', 'Max', '+7-943-264-45-75', 'ford-1.jpg', 2014),
	car('Ford', 'Mondeo', 'Dan', '+7-953-264-95-75', 'ford-2.jpg', 2015),
	car('Audi', 'Rock', 'Ivan', '+7-943-547-45-55', 'ford-3.png', 2016)
]

new Vue({
	el: "#app",
	data: {
		cars: cars,
		car: cars[0],
		logs: [],
		selectCarIndex: 0,
		phoneVisibility: false,
		search: '',
		modalVisibility: false
	},
	methods:{
		selectCar(index){
			this.car = cars[index],
			this.selectCarIndex = index
		},
		newOrder(){
			this.modalVisibility = false
			this.logs.push(
				log(`Success order: ${this.car.name} - ${this.car.modal}`, 'ok')
			)
		},
		cancelOrder(){
			this.modalVisibility = false
			this.logs.push(
				log(`Canceld order: ${this.car.name} - ${this.car.modal}`, 'cnl')
			)
		}
	},
	computed: {
		phoneBtnText(){
			return this.phoneVisibility ? 'Hide phone' : 'Show phone'
		},
		filteredCars(){
			return this.cars.filter(car => {
				return car.name.indexOf(this.search) > -1 || car.modal.indexOf(this.search) > -1
			});
		}
	},
	filters: {
		date(value){
			return value.toLocaleString()
		}
	}
});
