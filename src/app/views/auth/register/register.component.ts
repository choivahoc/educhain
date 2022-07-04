import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  @ViewChild('input') vc: any;
  registerForm! : FormGroup;
  constructor(
      public translate: TranslateService,
      private fb : FormBuilder,
      private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      userid: this.fb.control('', Validators.required),
    })
  }

  ngAfterViewInit() {
    this.vc.nativeElement.focus();
  }

  submitForm(): void {
    this.authService.register(
        this.registerForm.value.username, this.registerForm.value.userid, this.registerForm.value.password
    ).subscribe();
  }
}
