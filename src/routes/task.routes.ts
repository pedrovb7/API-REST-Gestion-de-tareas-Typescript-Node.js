import { Router } from "express";
import { getTasks, createTask, toggleTask } from "../controllers/task.controller";


const router = Router();


router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id", toggleTask);


export default router;