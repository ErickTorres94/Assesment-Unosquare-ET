import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TodoListService } from './todo-list.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './interceptor.interceptor';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
  HttpClientModule,  // Importar este antes de los servicios HTTP
  AppRoutingModule,
  ReactiveFormsModule,
  CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
    TodoListService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
