import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { UserService } from "./user.service";
import { Router } from "@angular/router";
import { catchError } from "rxjs/operators";
import Swal from "sweetalert2";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private userService: UserService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headersConfig: any = {
      "Content-Type": "application/json; charset=utf-8",
      "Accept": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*, educhain.choivahoc.vn",
    };

    const token = this.userService.currentTokenValue();

    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
    }
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request).pipe(
      catchError(err => {
        Swal.fire({
          icon: 'error',
          title: 'Please login!',
          confirmButtonText: 'OK',
          confirmButtonColor: '#fa6342',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            if (err.status === 401) {
              localStorage.removeItem("token");
              localStorage.removeItem("currentUser");
              window.location.href = "auth/login";            
            }
            return true;
          } else {
            return false;
          }
        });
        return throwError(err);
      })
    )
  }
}
