const stores = require("../models/Store");

module.exports = {
  getAllStore: async (req, res) => {
    try {
      const Store = await stores.find({}, "-__v");

      res.json(Store);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  getStorebyID: async (req, res) => {
    try {
      const { id } = req.params;
      const storeByID = await stores.findById(id, "-__v");

      res.json(storeByID);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  addStore: async (req, res) => {
    try {
      let postStore = req.body;
      await stores.create(postStore);

      res.json("New Store has been added");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  deleteStore: async (req, res) => {
    try {
      const { id } = req.params;
      await stores.findByIdAndDelete(id);

      res.json("Deleted Store successfull");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  editStore: async (req, res) => {
    try {
      const { id } = req.params;
      const update = {
        name: req.body.name,
        imgProduct: req.body.imgProduct,
        productDescription: req.body.productDescription,
        contactStore: req.body.contactStore
      };

      await stores.findByIdAndUpdate(id, update);

      res.json("Updated Store Successfull");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },
};
