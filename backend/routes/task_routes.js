import express from "express";

import { protectRoute } from "../middleware/protectRoute.js";
import { createTask, deleteTask, getAllTasks, getATask, updateTask } from "../controller/task_controller.js";

const route = express.Router();

route.post("/" ,protectRoute, createTask)
route.get("/",protectRoute, getAllTasks)
route.get("/:id",protectRoute, getATask)
route.put("/:id",protectRoute, updateTask)
route.delete("/:id",protectRoute, deleteTask)


export default route;