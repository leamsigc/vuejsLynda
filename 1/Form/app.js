// new Vue({
// 	el: '#app',
// 	data: {
// 		email: 'ismael@leamsigc.com'
// 	}
// });

// Vue Model
let vm = new Vue({
	el: '#app',
	data: {
		email: '',
		submitted: false
	},
	methods: {
		handleSubmit() {
			console.log(`Submitted ${this.email}`);
			this.submitted = true;
		}
	}
});
