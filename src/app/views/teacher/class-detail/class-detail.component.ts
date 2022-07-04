import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {

  listDepartment: any[];
  className = '';
  listStudents: any[];
  displayStudentDetail = false;
  studentDetail: any;
  listdiplomasByUserID: any[];
  diplomas: any;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private teacherService: TeacherService,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      points: this.fb.array([]),
    });
  }

  listDiplomas: any[];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.className = params?.className;
      this.teacherService.getStudentsByClass(this.className).subscribe(data => {
        this.listStudents = data.data
      })
    });

    this.teacherService.getdiplomas().subscribe(diplomas => {
      this.diplomas = diplomas
      console.log(diplomas);
    });
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


    this.resetInput();
    this.diplomas.data.forEach(element => {
      if (element.user_id === userId) {
        let points = this.form.controls.points as FormArray;
        console.log(element);

        element.transcript.forEach(item => {
          if (item.point) {
            points.push(this.fb.group({
              point: item.point,
            }));
          }
        });

      }

    });
    this.listdiplomasByUserID = this.diplomas.data.filter(diploma => diploma.user_id === userId)

  }

  resetInput() {
    const arr = this.form.controls.points as FormArray;
    while (0 !== arr.length) {
      arr.removeAt(0);
    }
  }

  updatePoints() {
    let transcript;
    this.diplomas.data.forEach((element) => {
      if (element.user_id === this.studentDetail.user_id) {
        element.transcript.forEach((item, index) => {
          item.point = this.form.controls.points.value[index].point;
        })
        transcript =  element.transcript
        console.log(transcript);
      }
    });


    this.teacherService.updatePoints(this.studentDetail.user_id, transcript).subscribe(data => {
      console.log(data);
    })

  }
}
