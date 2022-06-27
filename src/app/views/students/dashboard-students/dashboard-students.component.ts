import { Component, Input, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
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

  constructor(private userService: UserService, private studentsService: StudentsService) { }

  type = "student";
  dataPoint: any;
  infoStudent: any;
  idDiplomas: any;

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(data => {
      this.infoStudent = data.data;
      this.idDiplomas = this.infoStudent.diplomas[0].diplomas_id;
      this.viewPoint(this.idDiplomas);
    }
    )

  }
  viewGraduate() {
    alert("Waiting")
  }
  viewPoint(id) {
    this.studentsService.getPoint(id).subscribe(data => {
      this.dataPoint = data.data[0].transcript;
    }
    )
  }

}
