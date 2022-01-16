//Requerimos el modelo
const Champion = require("./champions.model");

// Requerimos el controlador de errores y el delete

const { setError } = require("../../utils/error/error");
const { deleteFile } = require("../../middlewares/deleteFile");


// Metodos POST, GETALL, GET , PATCH Y DELETE :

const postNewChampion = async (req, res, next) => {
  try {
    const newChampion = new Champion();
    newChampion.name = req.body.name;
    if (req.file) {
      newChampion.img = req.file.path;
    }
    newChampion.baseHp = req.body.baseHp;
    newChampion.baseMana= req.body.baseMana;
    newChampion.baseMovSpeed = req.body.baseMovSpeed;
    newChampion.preferedLane = req.body.preferedLane;
    newChampion.habilities= req.body.habilities;
    const championDb = await newChampion.save();
  
    return res.status(201).json(championDb);
  } catch (error) {
    return next(setError(500, "Champion not saved"))
  }
};

const getAllChampion = async (req, res, next) => {
  try {
    const championsDb = await Champion.find();
    res.status(200).json(championsDb);
  } catch (error) {
    return next(setError(500, "Champions failed server"));
  }
};
const getChampion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const championDb = await Champion.findById(id);
    if (!championDb) {
      return next(setError(404, "Champion not found"));
    }
    return res.status(200).json(championDb);
  } catch (error) {
    return next(setError(500, "Champion server error"));
  }
}

// Exportamos todas las funciones 
module.exports = {
  postNewChampion,
  getChampion,
  getAllChampion
  
};
