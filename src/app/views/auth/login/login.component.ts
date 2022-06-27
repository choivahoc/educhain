import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('input') vc: any;
  loginForm!: FormGroup;
  dataRole: any;
  constructor(public translate: TranslateService, private fb: FormBuilder, private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      role: this.fb.control('', Validators.required),
    })
  }

  ngAfterViewInit() {
    this.vc.nativeElement.focus();
  }

  submitForm() {
    this.authService.logIn(this.loginForm.value.username, this.loginForm.value.password, this.loginForm.value.role).subscribe((data) => {
      // this.checkRole();
      // if (this.dataRole === "student") {
      this.router.navigate(['student/dashboard'])
      // }
      // if (this.dataRole === "admin") {
      // this.router.navigate(['admin/dashboard'])
      // }
    })
  }

  checkRole() {
    let roleReceive: any;
    this.userService.getCurrentUser().subscribe((data) => {
      roleReceive = data.data.role_user
      this.dataRole = data.data.role_user;
      if (roleReceive.admin || roleReceive.manager) {
        this.dataRole === "admin"
      }
      else if (roleReceive.student) {
        this.dataRole === "student"
      }
      else
        this.dataRole === "teacher"
    }
    )
  }
}
