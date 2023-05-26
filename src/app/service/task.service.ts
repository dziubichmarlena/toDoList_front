import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  updateTaskDTO: UpdateTaskDTO = new UpdateTaskDTO();

  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  async getTask() : Promise<Task[]>{
    const headerDict = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict)
    };

    var result = await lastValueFrom(this.http.get<Task[]>(`${this.baseUrl}/tasks`, requestOptions));
    if (!result) {
      return [];
    }
    
    return result;
  }

  async getFilteredTask(actionOnTask: number) : Promise<Task[]>{
    const headerDict = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict)
    };

    var result = await lastValueFrom(this.http.get<Task[]>(`${this.baseUrl}/tasks/${actionOnTask}`, requestOptions));
    if (!result) {
      return [];
    }
    
    return result;
  }

  saveTask(task: Task) : Observable<any>{
    const headerDict = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
  
    return this.http.post<Task>(`${this.baseUrl}/tasks`, task, requestOptions);
  }


  updateTask(taskId: number, taskPriority: number, actionOnTask: number) : Observable<any>{
    const headerDict = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
  
    return this.http.put<Task>(`${this.baseUrl}/tasks/${taskId}`, { taskPriority, actionOnTask }, requestOptions);
  }

  deleteTask(taskId: number){
    const headerDict = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this.http.delete<Task>(`${this.baseUrl}/tasks/${taskId}`, requestOptions)
  }


}

export class Task{
  id!: number;
  date!: Date;
  taskContent!: string;
  actionOnTask!: number;
  priority!: number;
}

export class UpdateTaskDTO{
  taskPriority!: number;
  actionOnTask!: number;
}


