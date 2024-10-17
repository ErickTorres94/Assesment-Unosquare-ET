import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AppComponent } from './app.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AuthGuard } from './AuthGuard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'',component:LoginComponent
    },
    {
        path:'login', component:LoginComponent
    },
    {
        path:'todo-list',component:TodoListComponent, canActivate:[AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
