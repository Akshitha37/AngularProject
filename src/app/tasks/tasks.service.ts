import { Injectable } from "@angular/core";
import { type newTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})

export class TasksService {
   private tasks = [
      {
        id: 't1',
        userId: 'u1',
        title: 'master angular',
        summary: 'learn all the basics and advanced features of Angular',
        dueDate: '2025-04-24'
      },
      {
        id: 't2',
        userId: 'u2',
        title: 'build prototype',
        summary: 'build the first prototype of the online website',
        dueDate: '2025-04-24'
      },
      {
        id: 't3',
        userId: 'u3',
        title: 'prepare issue template',
        summary: 'prepare and issue template which will help with projec management',
        dueDate: '2025-04-24'
      }
    ];

    constructor(){
        const tasks = localStorage.getItem('tasks');
        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
    }

   getUserTasks(userId: string){
        return this.tasks.filter((task)=> task.userId === userId);
    }

    addTask(taskData: newTaskData, userId: string){
        this.tasks.unshift({
            id: new Date().getTime().toString(), 
            userId:userId, 
            title: taskData.title, 
            summary: taskData.summary, 
            dueDate: taskData.date});
            this.saveTasks();
        }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task)=> task.id!== id);
        this.saveTasks();
    }    

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}