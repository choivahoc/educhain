import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BASE_URL = 'http://eduapi.choivahoc.vn/v1';

  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}

  logIn(username: string, password: string, role: string): Observable<any> {
    const url = `${this.BASE_URL}/login`;
    const body = {
      username,
      password,
      role,
    };

    return this.httpClient.post<any>(url, body).pipe(
      catchError(this.handleError),
      tap((res) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully',
        });
        localStorage.setItem('token', JSON.stringify(res.token));
        this.userService.setCurrentToken(res.token);
      })
    );
  }

  register(username: string, userid: string, password: string) {
    const url = `${this.BASE_URL}/user/create_account`;
    const body = {
      username,
      user_id: userid,
      password,
    };
    return this.httpClient.post<any>(url, body).pipe(
      catchError(this.handleError),
      tap((_) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'Register in successfully',
        });
        // localStorage.setItem("currentUser", JSON.stringify(user));
        // this.userService.setCurrentUser(user);
        this.router.navigate(['auth','login'])
      })
    );
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.userService.setCurrentUser(null as any);
    this.userService.setCurrentToken(null as any);
    this.router.navigate(['auth', 'login']);
  }

  private handleError(error: HttpErrorResponse) {
    if(error.error.subcode === 4001002){
      Swal.fire({
        icon: 'error',
        title: 'Username is already taken, please try another!',
        confirmButtonText: 'OK',
        confirmButtonColor: '#fa6342',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          return true;
        } else {
          return false;
        }
      });
    } else if(error.error.subcode === 4001000){
      Swal.fire({
        icon: 'error',
        title: 'User name, user id or password is invalid!',
        confirmButtonText: 'OK',
        confirmButtonColor: '#fa6342',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          return true;
        } else {
          return false;
        }
      });
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops, something went wrong. Please try again later',
        confirmButtonText: 'OK',
        confirmButtonColor: '#fa6342',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          return true;
        } else {
          return false;
        }
      });
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
