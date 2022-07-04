import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DiplomasService } from 'src/app/services/diplomas.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-diplomas',
  templateUrl: './view-diplomas.component.html',
  styleUrls: ['./view-diplomas.component.css']
})
export class ViewDiplomasComponent implements OnInit {

  infoDiplomas: any;
  infoStudent: any;
  infoSchool: any;

  constructor(
    private active: ActivatedRoute,
    private router: Router,
    private diplomasService: DiplomasService,
    private userService: UserService,
    public translate: TranslateService
  ) { }

  ngOnInit() {
    const id = this.active.snapshot.queryParams.id;
    this.getUser();
    this.getInfoDiplomas(id);
  }
  getInfoDiplomas(id: any) {
    this.diplomasService.getPoint(id).subscribe(data => {
      this.infoDiplomas = data.data[0];
    })
  }

  getUser() {
    this.userService.getCurrentUser().subscribe(data => {
      this.infoStudent = data.data;
      this.infoSchool = this.infoStudent.school[0];
    })
  }
}
