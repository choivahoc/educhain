import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { createPopper } from "@popperjs/core";
import { TeacherService } from "src/app/services/teacher.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-dashboard-teachers",
  templateUrl: "./dashboard-teachers.component.html",
  styleUrls: ["./dashboard-teachers.component.css"],
})
export class DashboardTeachersComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private teacherService: TeacherService) { }

  inforUser: any;
  listDepartment: any[];

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(data => {
      this.inforUser = data.data;
    })

    this.teacherService.getDepartment().subscribe(data => {
      this.listDepartment = data.data;
    })

    this.teacherService.getdiplomas().subscribe(data => {
    console.log(data);
    
    })
  }
  classDetail(className: string) {
    this.router.navigate(['teacher/class'], {
      queryParams: {
        className: className
      }
    })
  }
}
