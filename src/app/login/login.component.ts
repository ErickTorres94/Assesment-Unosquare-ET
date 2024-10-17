import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodoListService } from '../todo-list.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'login-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private todoListService:TodoListService, private router: Router  ) { 
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.todoListService.login(this.loginForm.value).subscribe(response=>{
        if(response.response=='success'){
           
        localStorage.setItem("token",response.token);
        this.router.navigate(['./todo-list']);

        console.log(response.token);
        }
        else{
          alert('Invalid user');
        }
      }); 
    } else {
      alert("Invalid user")
    }
  }
}
