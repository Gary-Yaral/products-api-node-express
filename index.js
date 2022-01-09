const {validation} = require('./src/routes/')
const data = require('./src/products/index.json')

const express = require('express')

let app = express();
//Middleware
app.use(validation.urlValidation)

app.set(express.json())
app.set('json spaces', 4)

app.get('/', (req,res) => {
  res.status(200).send({
    message: 'Welcome to my API'
  })
})

app.get('/products/:id', (req,res) => {
  let id = parseInt(req.params.id)
  if(!id) {
    return res.status(400).send({
      message: 'Request not valid'
    })
  }

  let product = data.find(product => product.id === parseInt(id))
  
  if(product) return res.send({
    response: product
  })

  return res.status(400).send({
    message: 'Product not exists'
  })
})

app.get('/products', (req,res) => {
  res.status(200).send(data)
})


app.listen(3000, () => {
  console.log('Server started on port:'+3000)
})