const express = require('express');
const mongoose = require('mongoose');
const cp = require('child_process')


cp.exec('ls /',{s: "qwe"} , (err, stdout, stderr) => {
  console.log(stdout)
})

const a = 1
const app = express()
const products = [
    {
      id: '1001',
      name: 'Node.js for Beginners',
      category: 'Node',
      price: 990
    },
    {
      id: '1002',
      name: 'React 101',
      category: 'React',
      price: 3990
    },
    {
      id: '1003',
      name: 'Getting started with MongoDB',
      category: 'MongoDB',
      price: 1990
    }
  ]


app.get('/happytest/:commennt', (req, ress) => {
    console.log("calling happytest ...")
    const { params } = req
    ress.json({ 
        message: 'How are you today??',
        params
    })
})

app.get('/a1', (req, res) => {
    console.log(`calling a1 DB ...${req} `)

    mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
    const Schema = mongoose.Schema
    var thingSchema = new Schema({}, { strict: false });

    const Cat = mongoose.model('cats', thingSchema)
    const kitty = new Cat({ name1: 'xxxxxxxxxxxxx' })
    kitty.save().then(() => console.log('meow'))
    res.json({result: "200OK"})
})

app.get('/products/:id', (req, res) => {
    const { id } = req.params
    const result = products.find(product => product.id === id)
    res.json(result)
  })

app.use(express.json())
app.post('/products', (req, res) => {
    const payload = req.body
    res.json(payload)
  })

app.listen(9000, () => {
    console.log("...................")
})
