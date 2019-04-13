let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let usersSchema = new Schema({
    "userId"   : String,
    "userName" : String,
    "userPwd"  : String,
    "orderList": Array,
    "cartList" : [
        {
            "productId"   : String,
            "productName" : String,
            "productImage": String,
            "salePrice"   : Number,
            "checked"     : Number,
            "productNum"  : Number
        }
    ],
    "addressList": [
        {
            "addressId": String,
            "userName" : String,
            "streeName": String,
            "postCode" : Number,
            "tel"      : Number,
            "isDefault": Boolean
        }
    ]
});

module.exports = mongoose.model("User", usersSchema, "users");
