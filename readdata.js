const fetch = require('node-fetch');
fetch('http://localhost:3000/users')
	.then(response => response.json())
	.then(data => {
	console.log(data) // Prints result from `response.json()` in getRequest
	})
	.catch(error => console.error(error))