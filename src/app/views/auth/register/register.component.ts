import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  @ViewChild('input') vc: any;
  registerForm! : FormGroup;
  constructor(public translate: TranslateService, private fb : FormBuilder, private authService : AuthService, private router : Router, private userService : UserService ) { }

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

  submitForm(){
    this.authService.register(this.registerForm.value.username, this.registerForm.value.userid, this.registerForm.value.password).subscribe();
  }
}
