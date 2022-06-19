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
  selectedImage: File = null;
  url: any; //Angular 11, for stricter type
  msg = "";

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((res) => {
      console.log(res);
      this.settingsForm.patchValue({
        // imageUrl: res.data.avatar,
        fullName: res.data.full_name,
        gender: res.data.profile.gender,
        email: res.data.email,
        address: res.data.profile.address,
        dateOfBirth: res.data.profile.date_of_birth,
        city: res.data.profile.province,
        phone: '',
        identityCard: {
          no: res.data.citizen_identity_card.no,
          dateOfIssue: res.data.citizen_identity_card.date_of_issue,
          dateOfExprity: res.data.citizen_identity_card.date_of_exprity,
        },
      });
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
  }

  formSubmit() {
    console.log(this.settingsForm.value);
  }

  onImageSelected(event) {
    this.url = "";
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = "You must select an image";
      return;
    }

    let mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result;
    };
  }
}
