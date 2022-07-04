import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private teacherService: TeacherService
  ) { }

  listDepartment: any[];
  className = '';
  listStudents: any[];
  displayStudentDetail = false;
  studentDetail: any;
  listDiplomas: any[];

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.className = params?.className;
      this.teacherService.getStudentsByClass(this.className).subscribe(data => {
        this.listStudents = data.data;
      })
    });

    this.teacherService.getDepartment().subscribe(data => {
      this.listDepartment = data.data;
    })
  }

  detailStudent(userId: string) {
    this.displayStudentDetail = true;
    const params = {
      className: this.className,
      userId
    };
    this.teacherService.getStudentDetail(params).subscribe(data => {
      this.studentDetail = data.data[0];
    });
    this.teacherService.getdiplomas().subscribe(diplomas => {
      this.listDiplomas = diplomas.data.filter(diploma => diploma.user_id === userId)
    });
  }
}
