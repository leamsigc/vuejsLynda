// Global component
Vue.component('list-component', {
	template: `<div> Static component here </div>`
});

//local component
let anotherComponent = {
	data: () => ({
		msg: 'Hello from the local component'
	}),
	template: `<div>{{msg}}</div>`
};
//Simple component
Vue.component('a-pod', {
	template: `<div>
	<p>Date: {{date}}</p>
	<img :src='imgSrc' :title='imgTitle'>
	
	</div>
	`,
	data: () => ({
		imgSrc: '',
		imgTitle: ''
	}),
	props: ['date'],
	created() {
		this.fetchApod();
	},
	methods: {
		fetchApod() {
			const URL = 'https://api.nasa.gov/planetary/apod?api_key=';
			const APIKEY = 'ZHKEOWWz5sedu6TR9yosZwRFClxNWBvXlRzaPdq3';
			let url = `${URL}${APIKEY}`;
			if (this.date) {
				url += `&date=${this.date}`;
			}
			fetch(`${url}`)
				.then(res => res.json())
				.then(resp => {
					this.imgSrc = resp.url;
					this.imgTitle = resp.title;
				});
		}
	}
});
let vm = new Vue({
	el: '#app',
	components: {
		'another-component': anotherComponent
	},
	data: {
		asteroids: [],
		loading: false
	}
	// methods: {
	// 	getDataFromApi() {
	// 		const URL = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=';
	// 		const APIKEY = 'ZHKEOWWz5sedu6TR9yosZwRFClxNWBvXlRzaPdq3';
	// 		fetch(`${URL}${APIKEY}`)
	// 			.then(res => res.json())
	// 			.then(resp => {
	// 				// console.log(resp.near_earth_objects);
	// 				this.asteroids = resp.near_earth_objects.slice(0, 10);
	// 				this.loading = false;
	// 			});
	// 	}
	// },
	// created() {
	// 	this.getDataFromApi();
	// }
});
