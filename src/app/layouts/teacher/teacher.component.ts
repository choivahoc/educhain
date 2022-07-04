import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  showNavbar = false;

  constructor() {}

  ngOnInit(): void {}

  public setShowNavbar(): void {
    // Todo Something
  }

}
