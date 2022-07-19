const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   fname: {
      type: String
   },
   lname: {
      type: String
   },
   address: {
      type: String
   },
   city: {
      type: String
   },
   country: {
      type: String
   },
   postalcode: {
      type: Number
   },
   about: {
      type: String
   }
}, 
{
   collection: 'employees'
})

module.exports = mongoose.model('Employee', Employee)