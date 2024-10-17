import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private apiUrl = 'https://localhost:7220/api/';  

  constructor(private http: HttpClient) { }
 
  login(login : any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'Auth/login',login);
  }
 
  getTasks(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',  
      'Authorization': `Bearer ${localStorage.getItem('token')}`  
    });
    return this.http.get<any[]>(this.apiUrl+'todo', { headers });
  }
 
  addTask(task: any): Observable<any> {
    var token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',  
      'Authorization': `Bearer ${localStorage.getItem('token')}`  
    });

    // Realiza la solicitud POST
    return this.http.post<any>(this.apiUrl+'todo', task, { headers }); 
  }
 
  updateTask(task: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',  
      'Authorization': `Bearer ${localStorage.getItem('token')}`  
    });
    return this.http.put<any>(`${this.apiUrl+'todo'}/${task.id}`, task, { headers });
  }
 
  deleteTask(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',  
      'Authorization': `Bearer ${localStorage.getItem('token')}`  
    });
    return this.http.delete<any>(`${this.apiUrl+'todo'}/${id}`, { headers });
  }
}
