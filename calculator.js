const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req, res) => {
  // console.log(__dirname)
  res.sendFile(__dirname + '/index.html')
})

app.get('/about', (req, res) => {
  res.send('My name is Steve. I love coffee and code')
})

app.post('/', (req, res) => {
  let num1 = Number(req.body.num1)
  let num2 = Number(req.body.num2)
  res.send('Result is ' + (num1 + num2))
})

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator', (req, res) => {
  let height = Number(req.body.height)
  let weight = Number(req.body.weight)
  let bmi = weight / (height * height)

  res.send(`Your BMI result is ${bmi.toFixed(1)}`)
})

app.listen(port, () => {
  console.log(`Server started on port : ${port}`)
})
