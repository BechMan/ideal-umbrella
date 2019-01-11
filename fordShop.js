"use strict";
const cars = [
	{name: 'Ford', model: 'Focus', owner: 'Max', year: 2014, phone: '+7-943-264-45-75', image: 'ford-1.jpg'}
]

new Vue({
	el: '#app',
	data: {
		cars: cars
	}
})
