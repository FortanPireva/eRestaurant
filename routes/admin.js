const express = require("express");

const adminRouter = express.Router();

const adminController = require("../controllers/AdminController");
adminRouter.get("/", adminController.getIndex);
adminRouter.get("/add-menu", adminController.getAddMenu);
adminRouter.post("/add-menu", adminController.postAddMenu);
adminRouter.get("/menus", adminController.getMenus);

adminRouter.get("/edit", adminController.getEditMenu);
adminRouter.post("/edit", adminController.postEditMenu);
adminRouter.post("/menu/delete", adminController.deleteMenu);

module.exports = adminRouter;
