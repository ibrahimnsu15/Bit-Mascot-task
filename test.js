const mongoose = require("mongoose");
console.log("Create Schema");
var OrderSchema = mongoose.Schema({
    item: String,
    quantity: Number,
    price: Number, 
    
});


OrderSchema.methods.total = function(){
    console.log("Product: %s\nQuantity: %d\nTotal price: %d",this.item, this.quantity, this.quantity*this.price );
}

var Order = mongoose.model("Order",OrderSchema);

var firstOrder = new Order({
    item:"Mobile",
    quantity:2,
    price:50000
});

firstOrder.total();