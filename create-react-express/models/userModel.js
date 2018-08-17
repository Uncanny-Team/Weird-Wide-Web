var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var UserSchema = new Schema({
  
   username: {
     type: String,
     trim: true,
     required: "A Username is required!"
   },

   password: {
     type: String,
     trim: true,
     required: "You need a Password!",
     validate: [
      
      function(input) {
        
        return input.length >= 6;
      },
      
      "password needs to be over 6 characters long."
    ]
   },

   email: {
     type: String,
     match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
     unique: true
   },

   userCreated: {
     type: Date,
     default: Date.now
   }
});


var User = mongoose.model("User", UserSchema);


module.exports = User;