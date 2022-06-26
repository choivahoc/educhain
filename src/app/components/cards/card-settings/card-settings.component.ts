import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUser, IUserUpdate } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-card-settings",
  templateUrl: "./card-settings.component.html",
})
export class CardSettingsComponent implements OnInit {
  settingsForm!: FormGroup;
  isSubmit: boolean = false;
  selectedImage: File = null;
  currentUser: IUser;
  url: any; //Angular 11, for stricter type
  msg = "";
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((res) => {
      this.currentUser = res.data;
      this.settingsForm.patchValue({
        // imageUrl: res.data.avatar,
        fullName: res.data.full_name,
        gender: res.data.profile.gender,
        email: res.data.email,
        address: res.data.profile.address,
        dateOfBirth: res.data.profile.date_of_birth,
        city: res.data.profile.province,
        phone: res.data.profile.phone,
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
    this.currentUser.email = this.settingsForm.value.email;
    this.currentUser.full_name = this.settingsForm.value.fullName;
    this.currentUser.profile.address = this.settingsForm.value.address;
    this.currentUser.profile.city = this.settingsForm.value.city;
    this.currentUser.profile.date_of_birth = this.settingsForm.value.dateOfBirth;
    this.currentUser.profile.gender = this.settingsForm.value.gender;
    this.currentUser.profile.phone = this.settingsForm.value.phone;
    this.currentUser.citizen_identity_card.date_of_exprity = this.settingsForm.value.identityCard.dateOfExprity;
    this.currentUser.citizen_identity_card.date_of_issue = this.settingsForm.value.identityCard.dateOfIssue;
    this.currentUser.citizen_identity_card.no = this.settingsForm.value.identityCard.no;
    
    this.isSubmit = true;
    // const userUpdate = {
    //   // avatar: "string",
    //   email: this.settingsForm.value.email,
    //   full_name: this.settingsForm.value.fullName,
    //   profile: {
    //     address: this.settingsForm.value.address,
    //     city: this.settingsForm.value.city,
    //     date_of_birth: this.settingsForm.value.dateOfBirth,
    //     gender: this.settingsForm.value.gender,
    //     phone: this.settingsForm.value.phone,
    //   },
    //   citizen_identity_card: {
    //     date_of_exprity: this.settingsForm.value.identityCard.dateOfExprity,
    //     date_of_issue: this.settingsForm.value.identityCard.dateOfIssue,
    //     no: this.settingsForm.value.identityCard.no,
    //   },
    // };
    this.userService.updateUser(this.currentUser, this.currentUser.user_id).subscribe((data) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Update in successfully",
      });
      // this.router.navigate(["profile", data.user.username]);
    });
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

  updateUser() {
    Swal.fire({
      icon: "question",
      title: "Are you sure you want to update?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#fa6342",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.formSubmit();
      }
    });
  }
}
