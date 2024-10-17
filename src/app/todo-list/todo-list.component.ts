import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoListService } from '../todo-list.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todoForm!: FormGroup;
  tasks: any[] = [];  

  constructor(private fb: FormBuilder, private todoService: TodoListService, private router: Router ) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      id: [null],
      title: ['', Validators.required],
      isDone: [false]
    });

    // Cargar las tareas desde la base de datos al inicio
     this.getTasks();
  }
 
  getTasks(): void {
    this.todoService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
 
  onSubmit(): void {
    if (this.todoForm.valid) {
      if (this.todoForm.value.id) {
        this.todoService.updateTask(this.todoForm.value).subscribe(() => {
          this.getTasks();  // Actualizar lista de tareas
          this.todoForm.reset({ id: null, isDone: false });
        });
      } else {
        this.todoService.addTask(this.todoForm.value).subscribe(() => {
          this.getTasks();
          this.todoForm.reset({ id: null, isDone: false });
        });
      }
    }
  }
 
  deleteTask(id: number): void {
    this.todoService.deleteTask(id).subscribe(() => {
      this.getTasks();
    });
  }
 
  editTask(task: any): void {
    this.todoForm.setValue({
      id: task.id,
      title: task.title,
      isDone: task.isDone
    });
  }

  logout():void{
    localStorage.clear();
    this.router.navigate(['./login']);

  }
}
