import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { DiplomasService } from 'src/app/services/diplomas.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(
    private userService: UserService,
    private adminService: AdminService,
    private teacherService: TeacherService,
    private diplomasService: DiplomasService,
    private router: Router
  ) { }

  infoAdmin: any;
  listDepartment: any;
  idDepartment: any;
  listMajor: any;
  listClass: any;
  listStudent: any;
  listDiplomas: any;
  idSpecialPut: any;
  view: boolean;

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(data => {
      this.infoAdmin = data.data;
      this.viewListDepartment();
    }
    )
  }

  viewListDepartment() {
    this.adminService.getDepartment().subscribe(data => {
      this.listDepartment = data.data;
      for (let i = 0; i < this.listDepartment.length; i++) {
        this.idDepartment = this.listDepartment[i].department_id;
      }
    }
    )
  }

  getMajor(id) {
    this.adminService.getMajors(id).subscribe(data => {
      this.listMajor = data.data;
    })
  }

  getClass(listClass) {
    this.listClass = listClass;
  }

  getStudent(id) {
    this.teacherService.getStudentsByClass(id).subscribe(data => {
      this.listStudent = data.data
    })
  }

  detailStudent(id) {
    this.idSpecialPut = id;
    this.teacherService.getDiplomas().subscribe(diplomas => {
      this.listDiplomas = diplomas.data.filter(diploma => diploma.user_id === id)
    })
  }
  actionDiplomas(idSpecialPut) {
    const body = {
      "is_nft_diplomas": true
    }
    this.diplomasService.editLicense(idSpecialPut, body).subscribe(data => {
      this.view = data.message
    })
  }

  viewGraduate(idDiplomas) {
    this.router.navigate(['diplomas']
      , {
        queryParams: { id: idDiplomas }
      }
    );
  }
}
