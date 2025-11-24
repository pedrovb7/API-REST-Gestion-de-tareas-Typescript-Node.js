import { Task } from "../models/task.model";
import { randomUUID } from "crypto";


class TaskService {
private tasks: Task[] = [];


getAll(): Task[] {
return this.tasks;
}


create(title: string): Task {
const newTask: Task = {
id: randomUUID(),
title,
completed: false,
};
this.tasks.push(newTask);
return newTask;
}


toggle(id: string): Task | undefined {
const task = this.tasks.find(t => t.id === id);
if (task) task.completed = !task.completed;
return task;
}
}


export default new TaskService();