const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
    {
        Name:{type:String,required:true},
        Author:{type:String,required:true},
        Pages:{type:String,required:true},
        Price:{type:Number,required:true},
        Rating:{type:Number,required:true},
    }
)
const BookModel = mongoose.model('Book',BookSchema);
module.exports = BookModel;
