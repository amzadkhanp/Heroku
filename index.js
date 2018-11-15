const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port', (process.env.PORT || 5000))

//Allows us to process the data
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Routes
app.get('/', function(req,res) {
	res.send("Hello World! I am Ramnarayna Reddy and a very good Customer relationships Manager!!!")
})

app.getElementsBy('/webhook/', function(req,res) {
	if (req.query['hub.verify_token'] == "TO51635e353ea34a57815922ae96c48ac0")
	{
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong Token")
})

app.listen(app.get('port'), function() {
	console.log("running: port")
})