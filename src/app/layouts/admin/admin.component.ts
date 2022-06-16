import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  showNavbar = true;

  constructor() {}

  ngOnInit(): void {}

  public setShowNavbar(): void {
    this.showNavbar = !this.showNavbar;
  }
}
