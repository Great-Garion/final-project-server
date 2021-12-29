const info = require("../models/Information");

module.exports = {
  getAllInfo: async (req, res) => {
    try {
      const allInfo = await info.find({}, "-__v");

      res.json(allInfo);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internam Server Error",
      });
    }
  },

  getInfoByID: async (req, res) => {
    try {
      const { id } = req.params;
      const InfoByID = await info.findById(id, "-__v");

      res.json(InfoByID);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  addNewInfo: async (req, res) => {
    try {
      const newInfo = req.body;
      await info.create(newInfo);

      res.json("Adding New Info is success");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },

  deleteInfo: async (req, res) => {
    try {
      const { id } = req.params;
      await info.findByIdAndDelete(id);

      res.json("Deleted a Info is Success");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  editInfo: async (req, res) => {
    try {
      const { id } = req.params;
      const update = {
        police: req.body.police,
        hospital: req.body.hospital,
        hotel: req.body.hotel,
        worship: req.body.worship,
      };

      await info.findByIdAndUpdate(id, update);

      res.json("Editing a Info Success");
    } catch (error) {
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },
};
