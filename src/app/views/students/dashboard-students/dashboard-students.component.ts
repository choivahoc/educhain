import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-students',
  templateUrl: './dashboard-students.component.html',
  styleUrls: ['./dashboard-students.component.css']
})
export class DashboardStudentsComponent implements OnInit {

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(private userService: UserService) { }

  points = [
    { 'id': 'MH01', 'name': 'Math', 'number': '2', 'point': '7' },
    { 'id': 'MH02', 'name': 'Math2', 'number': '2', 'point': '7' },
    { 'id': 'MH03', 'name': 'Math3', 'number': '2', 'point': '7' },
    { 'id': 'MH04', 'name': 'Math4', 'number': '2', 'point': '7' },
    { 'id': 'MH05', 'name': 'Math5', 'number': '2', 'point': '7' },
    { 'id': 'MH06', 'name': 'Math6', 'number': '2', 'point': '9' },
    { 'id': 'MH01', 'name': 'Math', 'number': '2', 'point': '7' },
    { 'id': 'MH02', 'name': 'Math2', 'number': '2', 'point': '7' },
    { 'id': 'MH03', 'name': 'Math3', 'number': '2', 'point': '7' },
    { 'id': 'MH04', 'name': 'Math4', 'number': '2', 'point': '7' },
    { 'id': 'MH05', 'name': 'Math5', 'number': '2', 'point': '7' },
    { 'id': 'MH06', 'name': 'Math6', 'number': '2', 'point': '9' },
    { 'id': 'MH01', 'name': 'Math', 'number': '2', 'point': '7' },
    { 'id': 'MH02', 'name': 'Math2', 'number': '2', 'point': '7' },
    { 'id': 'MH03', 'name': 'Math3', 'number': '2', 'point': '7' },
    { 'id': 'MH04', 'name': 'Math4', 'number': '2', 'point': '7' },
    { 'id': 'MH05', 'name': 'Math5', 'number': '2', 'point': '7' },
    { 'id': 'MH06', 'name': 'Math6', 'number': '2', 'point': '9' },
    { 'id': 'MH02', 'name': 'Math2', 'number': '2', 'point': '7' },
    { 'id': 'MH03', 'name': 'Math3', 'number': '2', 'point': '7' },
    { 'id': 'MH04', 'name': 'Math4', 'number': '2', 'point': '7' },
    { 'id': 'MH05', 'name': 'Math5', 'number': '2', 'point': '7' },
    { 'id': 'MH06', 'name': 'Math6', 'number': '2', 'point': '9' }
  ]

  type = "student";
  dataPoint: any;
  infoStudent: any;

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(data => {
      this.infoStudent = data.data;
      console.log(this.infoStudent);
    }
    )
  }
  viewGraduate() {
    console.log("1");

  }

}
