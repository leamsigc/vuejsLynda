let vm = new Vue({
	el: '#app',
	data: {
		imgUrl: null,
		loading: true,
		title: '',
		explanation: ''
	},
	methods: {
		getDataFromApi() {
			const URL = 'https://api.nasa.gov/planetary/apod?api_key=';
			const APIKEY = 'ZHKEOWWz5sedu6TR9yosZwRFClxNWBvXlRzaPdq3';
			fetch(`${URL}${APIKEY}`)
				.then(res => res.json())
				.then(resp => {
					console.log(resp);
					this.title = resp.title;
					this.imgUrl = resp.url;
					this.explanation = resp.explanation;
					this.loading = false;
				});
		}
	},
	created() {
		this.getDataFromApi();
	}
});
