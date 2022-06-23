import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  showNavbar = true;

  constructor() { }

  ngOnInit(): void { }

  public setShowNavbar(): void {
    this.showNavbar = !this.showNavbar;
  }
}