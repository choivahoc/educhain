import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {

  className = '';
  listStudents: any[];
  displayStudentDetail = false;
  studentDetail: any;
  listDiplomasByUserID: any[];
  diplomas: any;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private teacherService: TeacherService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      points: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.className = params?.className;
      this.teacherService.getStudentsByClass(this.className).subscribe(data => {
        this.listStudents = data.data
      })
    });
  }

  detailStudent(userId: string) {
    this.displayStudentDetail = true;
    const params = {
      class_name: this.className,
      user_id: userId
    };
    this.teacherService.getStudentDetail(params).subscribe(data => {
      this.studentDetail = data.data[0];
      this.resetInput();

      this.studentDetail.student_diplomas.transcript.forEach(item => {
        const points = this.form.controls.points as FormArray;
        if (item.point) {
          points.push(this.fb.group({
            point: item.point,
          }));
        }
      })
    });
  }

  resetInput() {
    const arr = this.form.controls.points as FormArray;
    while (0 !== arr.length) {
      arr.removeAt(0);
    }
  }

  updatePoints() {
    const transcript = this.studentDetail.student_diplomas.transcript.map((item, index) => {
      item.point = this.form.controls.points.value[index].point;
      return item;
    });

    this.teacherService.updatePoints(this.studentDetail.user_id, transcript).subscribe((_) => {
      this.toastr.success('','Update point successful!');
    })

  }
}
