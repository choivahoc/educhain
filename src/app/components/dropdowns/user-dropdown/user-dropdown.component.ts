import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { createPopper } from "@popperjs/core";
import { AuthService } from "src/app/services/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-user-dropdown",
  templateUrl: "./user-dropdown.component.html",
  styleUrls: ["./user-dropdown.component.scss"],
})
export class UserDropdownComponent implements AfterViewInit {
  dropdownPopoverShow = false;
  @ViewChild('btnDropdownRef', { static: false }) btnDropdownRef: ElementRef;
  @ViewChild('popoverDropdownRef', { static: false })
  popoverDropdownRef: ElementRef;
  
  constructor(private authService : AuthService){}
  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: 'bottom-start',
      }
    );
  }
  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }

  logOut() {
    Swal.fire({
      icon: "question",
      title: "Are you sure to logout?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#fa6342",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.authService.logOut();
        return true;
      } else {
        return false;
      }
    });
  }
}
