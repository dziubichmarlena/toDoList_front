import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task, TaskService } from '../service/task.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddtaskComponent } from '../addtask/addtask.component';

@Component({
  selector: 'app-taskspage',
  templateUrl: './taskspage.component.html',
  styleUrls: ['./taskspage.component.css']
})
export class TaskspageComponent implements OnInit {
  tasks: Task[] = [];
  
  constructor(private router: Router,
    private taskService: TaskService,
    private dialog: MatDialog) { 
  }

  async ngOnInit() {
    this.tasks = await this.taskService.getTask();
    console.log(this.tasks);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/logowanie']);
  }

   openDialog(){
    const dialogRef = this.dialog.open(AddtaskComponent, {
      position: {
        top: '100px'
      }
    }); 
     dialogRef.afterClosed().subscribe(async (result) => {
      this.tasks = await this.taskService.getTask()
    });
  }

  onSelected(task: Task, selectedPriority: number, selectedAction: number){
    task.priority = selectedPriority;
    task.actionOnTask = selectedAction;
    this.taskService.updateTask(task.id, selectedPriority, selectedAction).subscribe();
  }

  deleteTask(taskId: number){
    this.taskService.deleteTask(taskId).subscribe(async() =>
    this.tasks = await this.taskService.getTask()
    );
  }

}
