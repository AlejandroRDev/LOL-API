const Classe = require("./classes.model");

const { setError } = require("../../utils/error/error");


const getAllClasses = async (req, res, next) => {
  try {
    const classesDb = await Classe.find().populate('subclasses')
    res.status(200).json(classesDb);
  } catch (error) {
    return next(setError(500, "Class failed server"));
  }
};

const getClass = async (req, res, next) => {
  try {
    const { id } = req.params;
    const classDb = await Classe.findById(id).populate('subclasses')
    if (!classDb) {
      return next(setError(404, "Class not found"));
    }
    return res.status(200).json(classDb);
  } catch (error) {
    return next(setError(500, "Class server error"));
  }
};



module.exports = {
  getAllClasses,
  getClass,
  
};
