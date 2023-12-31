const mongoose = require('mongoose');
const Schema = mongoose.Schema;


ProductSchema = new Schema
(   {
        productid:{type: String,required:true},
        name: { type: String, required: [true, "Product name must be included"] },
        price: { type: Number, required: [true, "Please provide price value"] },
        description: {type: String, required: false },
        image: { type: String, required: true  },
        rating: {type: Number, default: 0,required: false},
        size: {type: String ,required:true}
        // numOfReviews: {    type: Number, default: 0, required: true },
        // user: {
        //     type: mongoose.Types.ObjectId,
        //     ref: "User",
        //     required: true,
        //   },

    },
    {
        timestamps: true
    }
);
  const ProductModel = mongoose.model('Product', ProductSchema);
  module.exports = mongoose.model('product', ProductSchema);