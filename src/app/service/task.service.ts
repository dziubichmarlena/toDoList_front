import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

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

  saveTask(task: Task) : Observable<any>{
    const headerDict = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
  
    return this.http.post<Task>(`${this.baseUrl}/addTask`, task, requestOptions);
  }
}

export class Task{
  date!: Date;
  taskContent!: string;
}

