import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {


  listDepartment: any[];
  className: string = '';
  constructor(private route: ActivatedRoute,
     private router: Router, 
     private userService: UserService,
     private teacherService: TeacherService) { }
  listStudents: any[];
  displayStudentDetail: boolean = false;
  studentDetail: any;
  listdiplomas:any[];
  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.className = params['className'];
      this.teacherService.getStudentsByClass(this.className).subscribe(data => {
        this.listStudents = data.data
        console.log(this.listStudents);
      })
    });

    this.teacherService.getDepartment().subscribe(data => {
      this.listDepartment = data.data;
    })
  }

  detailStudent(userId: string) {
    this.displayStudentDetail = true;
    this.teacherService.getStudentDetail(this.className, userId).subscribe(data => {
      this.studentDetail = data.data[0]   
      console.log( data.data[0] );
      
    })

    
    
    this.teacherService.getdiplomas().subscribe(diplomas => {
        console.log(diplomas);
        this.listdiplomas = diplomas.data.filter(diploma => diploma.user_id == userId )
        
    })   
; 
  }
}
