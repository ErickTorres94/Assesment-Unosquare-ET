// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
    
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log('Interceptor activo');

//     const token = localStorage.getItem('token');   

//     if (token) {
//       const clonedRequest = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`   
//         }
//       });
//       return next.handle(clonedRequest);
//     }

//     return next.handle(req);
//   }
// }
