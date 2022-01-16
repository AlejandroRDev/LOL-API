const Subclass = require("./subclasses.model");

const { setError } = require("../../utils/error/error");
const { deleteFile } = require("../../middlewares/deleteFile");

const getAllSubclasses = async (req, res, next) => {
  try {
    const SubclassesDb = await Subclass.find().populate('champions')
    res.status(200).json(SubclassesDb);
  } catch (error) {
    return next(setError(500, "Subclass failed server"));
  }
};

const getSubclass = async (req, res, next) => {
  try {
    const { id } = req.params;
    const subclassDb = await Subclass.findById(id).populate('champions');
    if (!subclassDb) {
      return next(setError(404, "subclass not found"));
    }
    return res.status(200).json(subclassDb);
  } catch (error) {
    return next(setError(500, "Subclass server error"));
  }
};



module.exports = {
  getAllSubclasses,
  getSubclass
 
};
