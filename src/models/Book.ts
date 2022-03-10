import {Schema, model} from 'mongoose';

const BookSchema = new Schema({
    id: {type:String, required:true},
    name: {type: String, required:true},
    category: {type: String, required:true},
    ISBN: {type: String, required:true},
    releaseDate: {type: Date, default:Date.now},
    format: {type: String, required:true},
    quantity: {type: Number, required:true},
    sells: {type: Number, required: true}
})
export default model('Book', BookSchema);