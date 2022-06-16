import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-card-settings",
  templateUrl: "./card-settings.component.html",
})
export class CardSettingsComponent implements OnInit {
  settingsForm!: FormGroup;
  isSubmit: boolean = false;
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsersByType("student").subscribe((res) => {
      console.log(res);
    });

    this.settingsForm = this.fb.group({
      imageUrl: this.fb.control("", [Validators.required]),
      fullName: this.fb.control("", [Validators.required]),
      gender: this.fb.control("", [Validators.required]),
      email: this.fb.control("", [Validators.required, Validators.email]),
      address: this.fb.control("", [Validators.required]),
      dateOfBirth: this.fb.control("", [Validators.required]),
      city: this.fb.control("", [Validators.required]),
      phone: this.fb.control("", [Validators.required]),
      identityCard: this.fb.group({
        no: this.fb.control("", [Validators.required]),
        dateOfIssue: this.fb.control("", [Validators.required]),
        dateOfExprity: this.fb.control("", [Validators.required]),
      }),
    });
    // this.userService.getCurrentUser().subscribe(data => {
    //   this.currentUser = data;
    //   this.settingsForm.patchValue({
    //     imageUrl: this.currentUser.user.image,
    //     username: this.currentUser.user.username,
    //     bio: this.currentUser.user.bio,
    //     email: this.currentUser.user.email
    //   })
    // })
  }

  formSubmit() {
    console.log(this.settingsForm.value);
  }
}
