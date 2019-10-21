let vm = new Vue({
	el: '#app',
	data: {
		asteroids: [],
		loading: true
	},
	methods: {
		getDataFromApi() {
			const URL = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=';
			const APIKEY = 'ZHKEOWWz5sedu6TR9yosZwRFClxNWBvXlRzaPdq3';
			fetch(`${URL}${APIKEY}`)
				.then(res => res.json())
				.then(resp => {
					// console.log(resp.near_earth_objects);
					this.asteroids = resp.near_earth_objects.slice(0, 10);
					this.loading = false;
				});
		}
	},
	created() {
		this.getDataFromApi();
	}
});
