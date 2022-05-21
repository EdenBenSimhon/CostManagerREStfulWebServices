const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let costsSchema = new Schema({
    description: {type: String, required: true, max: 100},
    sum: {type: Number, required: true},
});

// Export the models
module.exports = mongoose.model('cost', costsSchema);


