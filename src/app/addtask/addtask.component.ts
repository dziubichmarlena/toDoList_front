import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task, TaskService } from '../service/task.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
  task: Task = new Task();

  constructor(private dialogRef: MatDialogRef<AddtaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private taskService: TaskService) {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  addTask() {
    this.taskService.saveTask(this.task).subscribe();
    this.dialogRef.close();
  }


}


