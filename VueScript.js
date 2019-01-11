"use strict";

function car(name, model, owner, phone, image, year){
	return {
		name, model, owner, phone, image, year
	}
}

const cars = [
	car('Ford', 'Focus', 'Max', 2014, '+7-943-264-45-75', 'ford-1.jpg'),
	car('Ford', 'Mondeo', 'Dan', 2015, '+7-953-264-95-75', 'ford-2.jpg'),
	car('Ford', 'Focus', 'Ivan', 2016, '+7-943-547-45-55', 'ford-3.jpg')
]

new Vue({
	el: '#app',
	data: {
		cars: cars
	}
})
