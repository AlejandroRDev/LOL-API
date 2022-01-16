const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const subclassSchema = new Schema({
    name: { type: 'String', required: true },
    description: { type: 'String', required: true },
    champions: [
        { type: Schema.Types.ObjectId, ref: "champions", required: true },
      ],
},
    {
        timestamps: true
    },
    {
       collection: "subclasses" 
    }

);

const subclass = mongoose.model("subclasses", subclassSchema);
module.exports = subclass;