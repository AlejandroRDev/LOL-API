// Requerimos la librería de mongoose
const mongoose = require("mongoose");
// Requerimos Schema para construcción de un modelo
const Schema = mongoose.Schema;

// Definimos el schema de nuestro movie
let classesSchema = new Schema(
  {
    name: { type: "String", required: true },
    description: { type: "String", required: true },
    subclasses: [
      { type: Schema.Types.ObjectId, ref: "subclasses", required: true },
    ],
  },
  {
    timestamps: true,
  },
  {
    collection: "classes",
  }
);

//Exportamos el schema
const apiClass = mongoose.model("classes", classesSchema);
module.exports = apiClass;