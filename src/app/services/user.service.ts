import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, debounceTime, tap } from "rxjs/operators";
import { IUser } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  BASE_URL = "http://eduapi.choivahoc.vn/v1";

  // private currentUserSubject: BehaviorSubject<IUser> =
  //   new BehaviorSubject<IUser>(
  //     JSON.parse(localStorage.getItem("currentUser") || "null")
  //   );

  constructor(private httpClient: HttpClient) {}

  // public currentUserValue(): IUser {
  //   return this.currentUserSubject.value;
  // }

  // public currentUser(): Observable<IUser> {
  //   return this.currentUserSubject;
  // }

  // public setCurrentUser(user: IUser) {
  //   this.currentUserSubject.next(user);
  // }

  // getCurrentUser(): Observable<IUser> {
  //   const url = `${this.BASE_URL}user`;
  //   return this.httpClient.get<IUser>(url).pipe(
  //     catchError(this.handleError),
  //     tap((user) => {
  //       localStorage.setItem("imageUser", JSON.stringify(user.user.image));
  //       localStorage.setItem("currentUser", JSON.stringify(user));
  //       this.currentUserSubject.next(user);
  //     })
  //   );
  // }

  // updateUser(userUpdate: IUserUpdate) {
  //   const url = `${this.BASE_URL}user`;
  //   const body: IUserUpdate = userUpdate;
  //   return this.httpClient.put<IUser>(url, body).pipe(
  //     catchError(this.handleError),
  //     tap((user) => {
  //       localStorage.setItem("imageUser", JSON.stringify(user.user.image));
  //       localStorage.setItem("currentUser", JSON.stringify(user));
  //       this.currentUserSubject.next(user);
  //     })
  //   );
  // }

  getUsersByType(userType: string) {
    // let header = {
    //   "Access-Control-Allow-Headers": "Content-Type",
    //   "Access-Control-Allow-Methods": "GET",
    //   "Access-Control-Allow-Origin": "*",
    // };
    // const requestOptions = {
    //   headers: new HttpHeaders(header),
    // };
    const url = `${this.BASE_URL}/user?user_type=${userType}`;
    return this.httpClient
      .get(url)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // Swal.fire({
    //   icon: "error",
    //   title: "Oops, something went wrong. Please try again later",
    //   confirmButtonText: "OK",
    //   confirmButtonColor: "#fa6342",
    // }).then((result) => {
    //   /* Read more about isConfirmed, isDenied below */
    //   if (result.isConfirmed) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
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
