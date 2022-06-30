import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/services/admin.service";
import { TeacherService } from "src/app/services/teacher.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private userService: UserService, private adminService: AdminService, private teacherService: TeacherService) { }
  department = [
    { 'id': 'K01', 'name': 'Khoa CNTT1', 'nganh': [{ 'id': 'N01', 'name': 'Ngành 01' }, { 'id': 'N02', 'name': 'Ngành 02' }, { 'id': 'N01', 'name': 'Ngành 03' }] },
    { 'id': 'K02', 'name': 'Khoa CNTT2', 'nganh': [{ 'id': 'N01', 'name': 'Ngành 01' }, { 'id': 'N02', 'name': 'Ngành 02' }, { 'id': 'N01', 'name': 'Ngành 03' }] },
    { 'id': 'K03', 'name': 'Khoa CNTT3', 'nganh': [{ 'id': 'N01', 'name': 'Ngành 01' }, { 'id': 'N02', 'name': 'Ngành 02' }, { 'id': 'N01', 'name': 'Ngành 03' }] },
    { 'id': 'K04', 'name': 'Khoa CNTT4', 'nganh': [{ 'id': 'N01', 'name': 'Ngành 01' }, { 'id': 'N02', 'name': 'Ngành 02' }, { 'id': 'N01', 'name': 'Ngành 03' }] },
    { 'id': 'K05', 'name': 'Khoa CNTT5', 'nganh': [{ 'id': 'N01', 'name': 'Ngành 01' }, { 'id': 'N02', 'name': 'Ngành 02' }, { 'id': 'N01', 'name': 'Ngành 03' }] },
    { 'id': 'K06', 'name': 'Khoa CNTT6', 'nganh': [{ 'id': 'N01', 'name': 'Ngành 01' }, { 'id': 'N02', 'name': 'Ngành 02' }, { 'id': 'N01', 'name': 'Ngành 03' }] },
  ]
  class = [
    { 'id': 'L01', 'name': 'CNTT1' },
    { 'id': 'L02', 'name': 'CNTT2' },
    { 'id': 'L03', 'name': 'CNTT3' },
    { 'id': 'L04', 'name': 'CNTT4' },
    { 'id': 'L05', 'name': 'CNTT5' },
    { 'id': 'L06', 'name': 'CNTT6' },
  ]

  type = "student";
  infoAdmin: any;
  listDepartment: any;
  idDepartment: any;
  listMajor: any;
  listClass: any;
  listStudent: any;
  listDiplomas: any;

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
    this.teacherService.getdiplomas().subscribe(diplomas => {
      this.listDiplomas = diplomas.data.filter(diploma => diploma.user_id === id)
    })
  }
  actionDiplomas() {
    alert("Pending...")
  }
}
