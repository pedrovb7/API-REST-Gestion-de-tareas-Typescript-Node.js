import { Request, Response } from "express";
import taskService from "../services/task.service";


export const getTasks = (req: Request, res: Response) => {
return res.json(taskService.getAll());
};


export const createTask = (req: Request, res: Response) => {
const { title } = req.body;
if (!title) return res.status(400).json({ message: "title requerido" });


const t = taskService.create(title);
return res.status(201).json(t);
};


export const toggleTask = (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "id requerido" });
  }

  const t = taskService.toggle(id);
  if (!t) return res.status(404).json({ message: "tarea no encontrada" });
  return res.json(t);
};