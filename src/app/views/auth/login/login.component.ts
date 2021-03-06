import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { ModelRolesKey } from '../../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('input') vc: any;
  loginForm!: FormGroup;
  dataRole: any;

  key = ModelRolesKey;

  constructor(
      public translate: TranslateService,
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router
  ) { }

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
    this.authService.logIn(this.loginForm.value.username, this.loginForm.value.password, this.loginForm.value.role).subscribe((_) => {
      if (this.loginForm.value.role === this.key.Student) {
        this.router.navigate(['student/dashboard'])
      } else if (this.loginForm.value.role === this.key.Admin) {
        this.router.navigate(['admin/dashboard'])
      } else {
        this.router.navigate(['teacher/dashboard'])
      }
    })
  }
}
