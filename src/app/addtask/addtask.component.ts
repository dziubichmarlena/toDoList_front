import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task, TaskService } from '../service/task.service';
import { take } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
  task: Task = new Task();
  isEmpty: boolean = false;

  constructor(private dialogRef: MatDialogRef<AddtaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private taskService: TaskService, private _snackBar: MatSnackBar) {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  addTask() {
    if(this.task.taskContent == null || this.task.priority == null || this.task.date == null){
      this.isEmpty = true;
    } else{
      this.taskService.saveTask(this.task).subscribe();
      this._snackBar.open('Zadanie zostało dodane', '', {
        duration: 1500,     
        panelClass: ["snackBar"]
      });
      this.dialogRef.close();
    }
  }
}


