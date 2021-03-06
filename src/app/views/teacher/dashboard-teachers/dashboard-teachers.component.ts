import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-teachers',
  templateUrl: './dashboard-teachers.component.html',
  styleUrls: ['./dashboard-teachers.component.css'],
})
export class DashboardTeachersComponent implements OnInit {
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService,
      private teacherService: TeacherService
  ) { }

  infoUser: any;
  listDepartment: any[];

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(data => {
      this.infoUser = data.data;
    })

    this.teacherService.getDepartment().subscribe(data => {
      this.listDepartment = data.data;
    })
  }
  classDetail(className: string) {
    this.router.navigate(['teacher/class'], {
      queryParams: {
        className
      }
    })
  }
}
