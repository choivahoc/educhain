import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BASE_URL = 'http://eduapi.choivahoc.vn/v1';

  private currentUserSubject: BehaviorSubject<IUser> =
    new BehaviorSubject<IUser>(
      JSON.parse(localStorage.getItem('currentUser') || 'null')
    );

  private currentToken: BehaviorSubject<string> = new BehaviorSubject<string>(
    JSON.parse(localStorage.getItem('token') || 'null')
  );

  constructor(private httpClient: HttpClient, private router: Router) { }

  public currentTokenValue(): string {
    return this.currentToken.value;
  }

  public setCurrentToken(token: string) {
    this.currentToken.next(token);
  }

  public currentUserValue(): IUser {
    return this.currentUserSubject.value;
  }

  public currentUser(): Observable<IUser> {
    return this.currentUserSubject;
  }

  public setCurrentUser(user: IUser) {
    this.currentUserSubject.next(user);
  }

  getCurrentUser(): Observable<any> {
    const url = `${this.BASE_URL}/user/self`;
    return this.httpClient.get<IUser>(url).pipe(
      catchError(this.handleError),
      tap((res) => {
        localStorage.setItem('imageUser', JSON.stringify(res?.data?.avatar));
        localStorage.setItem('currentUser', JSON.stringify(res?.data));
        this.currentUserSubject.next(res?.data);
      })
    );
  }

  updateUser(userUpdate: any, user_id: string) {
    const url = `${this.BASE_URL}/user/${user_id}`;
    const body: any = userUpdate;
    return this.httpClient.put<any>(url, body).pipe(
      catchError(this.handleError),
      // tap((user) => {
      //   localStorage.setItem("imageUser", JSON.stringify(user.user.image));
      //   localStorage.setItem("currentUser", JSON.stringify(user));
      //   this.currentUserSubject.next(user);
      // })
    );
  }

  getUsersByType(userType: string) {
    const url = `${this.BASE_URL}/user?user_type=${userType}`;
    return this.httpClient.get(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
