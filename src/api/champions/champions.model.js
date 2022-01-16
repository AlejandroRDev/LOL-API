const mongoose = require('mongoose');



const championSchema = new mongoose.Schema({
    name: { type: 'String', unique: true},
    img: {type: 'String', trim: true},
    baseHp: { type: 'number', required: true },
    baseMana: { type: 'number', required: true },
    baseMovSpeed: { type: 'number', required: true },
    preferedLane:{ type: 'String', required: true },
    habilities: [
        { type: 'String'},
      ] 
},
    {
        timestamps: true
    },
    {
       collection: "champions" 
    }

);


    const champion = mongoose.model("champions", championSchema);
    module.exports = champion;