import { TaskService, Task } from '../service/task.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificationdialog',
  templateUrl: './notificationdialog.component.html',
  styleUrls: ['./notificationdialog.component.css']
})
export class NotificationdialogComponent implements OnInit{
  tasks: Task[] = [];
  constructor(public taskService: TaskService){}

  async ngOnInit() {
    this.tasks = await this.taskService.getTask();
  }
}
