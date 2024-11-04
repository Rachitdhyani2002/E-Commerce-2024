//Import Statements
import mongoose from 'mongoose'

//Products Schema
const ProductSchema = new mongoose.Schema({
    title:{type:String,trim:true,required:true},
    price:{type:String,trim:true,required:true},
    category:{type:String,trim:true,required:true},
    image:{type:String,trim:true,required:true},

},{timestamps:true})

//Products Model
const ProductModel = mongoose.model('products',ProductSchema)

//Export Model
export default ProductModel