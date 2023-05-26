import { Component, Inject, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { Task, TaskService } from '../service/task.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddtaskComponent } from '../addtask/addtask.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-taskspage',
  templateUrl: './taskspage.component.html',
  styleUrls: ['./taskspage.component.css']
})
export class TaskspageComponent implements OnInit {
  tasks: Task[] = [];
  currentUrl = '';
  
  constructor(public router: Router,
    private taskService: TaskService,
    private dialog: MatDialog) { 
      this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((x) => {
        this.currentUrl = (x as NavigationEnd).url;
      });
  }

  async ngOnInit() {
    this.tasks = await this.taskService.getTask();
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
    this.taskService.updateTask(task.id, selectedPriority, selectedAction).subscribe(async() => 
    this.tasks = await this.taskService.getTask());
  }

  deleteTask(taskId: number){
    this.taskService.deleteTask(taskId).subscribe(async() =>
    this.tasks = await this.taskService.getTask()
    );
  }

  navigateToMain(){
    this.router.navigate(['/zadania']);
  }

}
