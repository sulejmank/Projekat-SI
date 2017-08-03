const mongoose = require('mongoose');

let lineSchema = mongoose.Schema({
brojBusa: {
  type:  String,
  required: true
},
od: {
  type: String,
  required: true
},
do: {
  type: String,
  required:true
},
stanice: {
    type: String,
    required: false
  },
polazak: {
  type: String,
  required:true
},
dolazak: {
  type: String,
  required: true
},
dani: {
  type: String,
  required:true
}

});


let Line = module.exports = mongoose.model('Line', lineSchema);
