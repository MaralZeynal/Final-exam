const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const {Schema}=mongoose


const brandSchema=new Schema({
    name: {type: String, required: true},
    major: {type: String, required: true},
    positon: {type: String, required: true},
    price: {type: Number, required: true},
    imgUrl: {type: String, required: true},
})

const Brands=mongoose.model("brands", brandSchema)
const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = 8080

app.get('/brands', (req, res) => {
    Brands.find({},(err, docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).json({message: err})
        }
    })
    // res.send('Hello World!')
  })

  app.get('/brands/:id', (req, res) => {
    const {id}=req.params
    Brands.findById(id,(err, docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).json({message: err})
        }
    })
    // res.send('Hello World!')
  })

  
  app.delete('/brands/:id', (req, res) => {
    const {id}=req.params
    Brands.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("Deleted!")
        }else{
            res.status(500).json({message: err})
        }
    })
    // res.send('Hello World!')
  })
  
  app.post('/brands/', (req, res) => {
let brand=new Brands({
    name:req.body.name,
    major:req.body.major,
    positon:req.body.positon,
    price:req.body.price,
    imgUrl:req.body.imgUrl,
})
brand.save()
  })


mongoose.connect("mongodb+srv://maralzeynal:Maral.2003@cluster0.wojm7e7.mongodb.net/?retryWrites=true&w=majority",
(err)=>{
    if(!err){
        app.listen(port, () => console.log(`http://localhost:${port}!`))
    }
})