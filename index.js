const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
/*
	console.log('host:',req.headers.host)
	const url='https://niyeturner.com' + req.originalUrl
	console.log('url:',url)
*/
	res.redirect(301, 'https://niyeturner.com' + req.originalUrl)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
