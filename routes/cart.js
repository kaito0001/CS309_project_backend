
const Cart = require('../models/cart.model')


const router = require("express").Router();


 

  //CREATE

  router.post("/add",  async (req, res) => {
    try{
        //get cart object from body 
        let cartParam = req.body;
        // validate

        const cart = new Cart(cartParam);

         await cart.save();
         res.send(" added to cart successfully ")

    }catch(err)
    {
        res.status(500).send('server error: '+ err);
    }
  });

  //UPDATE
  router.put("/:id", async (req, res) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //DELETE
  router.delete("/:id", async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json("Cart has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

 

  // //GET ALL

  router.get("/", async (req, res) => {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports=router