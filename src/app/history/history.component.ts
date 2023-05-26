import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task, TaskService } from '../service/task.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{
  doneTasks: Task[] = []; 
  constructor(public router: Router, private taskService: TaskService){}

  async ngOnInit() {
    this.doneTasks = await this.taskService.getFilteredTask(3);
  }

  deleteTask(taskId: number){
    this.taskService.deleteTask(taskId).subscribe(async() =>
    this.doneTasks = await this.taskService.getFilteredTask(3)
    );
  }

}
