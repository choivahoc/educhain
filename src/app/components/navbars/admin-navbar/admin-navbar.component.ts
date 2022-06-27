import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
})
export class AdminNavbarComponent implements OnInit {
  @Output() setShowNavbar = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  public showNavbar(): void {
    this.setShowNavbar.emit();
  }
}
