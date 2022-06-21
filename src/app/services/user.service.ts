import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, debounceTime, tap } from "rxjs/operators";
import Swal from "sweetalert2";
import { IUser, IUserUpdate } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  BASE_URL = "http://eduapi.choivahoc.vn/v1";

  private currentUserSubject: BehaviorSubject<IUser> =
    new BehaviorSubject<IUser>(
      JSON.parse(localStorage.getItem("currentUser") || "null")
    );

  private currentToken: BehaviorSubject<string> = new BehaviorSubject<string>(
    JSON.parse(localStorage.getItem("token") || "null")
  );

  constructor(private httpClient: HttpClient) {}

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
        localStorage.setItem("imageUser", JSON.stringify(res?.data?.avatar));
        localStorage.setItem("currentUser", JSON.stringify(res?.data));
        this.currentUserSubject.next(res?.data);
      })
    );
  }

  updateUser(userUpdate: any) {
    const url = `${this.BASE_URL}/user/edit`;
    const body: any = userUpdate;
    return this.httpClient.post<any>(url, body).pipe(
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
    Swal.fire({
      icon: "error",
      title: "Oops, something went wrong. Please try again later",
      confirmButtonText: "OK",
      confirmButtonColor: "#fa6342",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        return true;
      } else {
        return false;
      }
    });
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError("Something bad happened; please try again later.");
  }
}
