const transport = require("../models/transport");

module.exports = {
  getAllTransport: async (req, res) => {
    try {
      const Transport = await transport.find({}, "-__v");

      res.json(Transport);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  getTransportByID: async (req, res) => {
    try {
      const { id } = req.params;
      const transportByID = await transport.findById(id, "-__v");

      res.json(transportByID);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  addTransport: async (req, res) => {
    try {
      let postTransport = req.body;
      await transport.create(postTransport);

      res.json("Transport has been created");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  deleteTransport: async (req, res) => {
    try {
      const { id } = req.params;
      await transport.findByIdAndDelete(id);

      res.json("deleted Transport successfull");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  editTransport: async (req, res) => {
    try {
      const { id } = req.params;
      const update = {
        name: req.body.name,
        price: req.body.price,
        contact: req.body.contact,
      };

      await users.findByIdAndUpdate(id, update);

      res.json("Updated Transport successfull");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },
};
