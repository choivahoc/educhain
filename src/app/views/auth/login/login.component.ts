import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('input') vc: any;
  loginForm! : FormGroup;
  constructor(private fb : FormBuilder, private authService : AuthService, private router : Router, private userService : UserService ) { }

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

  submitForm(){
    this.authService.logIn(this.loginForm.value.username, this.loginForm.value.password, this.loginForm.value.role).subscribe(user => {
      this.router.navigate(['admin','dashboard'])
    })
  }
}
