const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
     fname:{
      type:String
   },
   lname:{
      type:String
   },
   email:{
      type:String
   },
   password:{
      type:String
   }

},{timestamps:true})



// userSchema.virtual("fullname").get(()=>{
// return(`${this.fname} ${this.lname}`);
// });

userSchema.methods = {
   authenticate : async function(password){
      console.log(password);
       return await bcrypt.compare(password,this.password);
   }
}

module.exports = mongoose.model("user",userSchema);