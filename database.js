const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yasmin:wrb=vg44@cluster0-63ofn.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});


let userSchema = new mongoose.Schema({
  firstName: String,
 lastName: String,
 phone: Number,
 email:String,
 password:String
});


let foodSchema = new mongoose.Schema({

  namefood: String,
  amount:String,
  description: String,
  location:String,
  file:String,
  imageUrl:String,
  booking: Boolean,
});



let userdata = mongoose.model('userdata', userSchema);
let fooddata = mongoose.model('fooddata', foodSchema);




module.exports = {

userdata,
fooddata
}
