import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiplomasService } from 'src/app/services/diplomas.service';

@Component({
  selector: 'app-view-diplomas',
  templateUrl: './view-diplomas.component.html',
  styleUrls: ['./view-diplomas.component.css']
})
export class ViewDiplomasComponent implements OnInit {

  infoDiplomas: any;

  constructor(
    private active: ActivatedRoute,
    private router: Router,
    private diplomasService: DiplomasService
  ) { }

  ngOnInit() {
    const id = this.active.snapshot.queryParams.id;
    this.getInfoDiplomas(id);
  }
  getInfoDiplomas(id: any) {
    this.diplomasService.getPoint(id).subscribe(data => {
      this.infoDiplomas = data;
      console.log(data);

    })
  }

}
