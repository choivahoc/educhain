import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { UserService } from "./user.service";
import { Router } from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private userService: UserService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headersConfig: any = {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*, educhain.choivahoc.vn",
    };

    const token = this.userService.currentTokenValue();

    if (token) {
      const expiry = JSON.parse(atob(token.split(".")[1])).exp;
      if (!(Math.floor(new Date().getTime() / 1000) >= expiry)) {
        headersConfig["Authorization"] = `Bearer ${token}`;
      } else {
        this.router.navigate(['auth','login'])
      }
    }

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
