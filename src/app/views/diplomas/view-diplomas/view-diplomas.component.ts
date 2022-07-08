import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs/operators';
import { DiplomasService } from 'src/app/services/diplomas.service';
import { FileService } from 'src/app/services/file.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-diplomas',
  templateUrl: './view-diplomas.component.html',
  styleUrls: ['./view-diplomas.component.css']
})
export class ViewDiplomasComponent implements OnInit {

  @ViewChild('screen', { static: true }) screen: any;
  idDiplomas: any;
  infoDiplomas: any;
  infoStudent: any;
  infoSchool: any;
  img = '';
  dataNFT: any;
  bodyNFT: any;
  hashCode: any;
  showLink: boolean;

  constructor(
    private active: ActivatedRoute,
    private router: Router,
    private diplomasService: DiplomasService,
    private userService: UserService,
    private translate: TranslateService,
    private captureService: NgxCaptureService,
    private fileService: FileService
  ) { }

  ngOnInit() {

    this.idDiplomas = this.active.snapshot.queryParams.id;
    this.getUser();
    this.getInfoDiplomas(this.idDiplomas);


  }
  getInfoDiplomas(id: any) {
    this.diplomasService.getPoint(id).subscribe(data => {
      this.infoDiplomas = data.data[0];
      if (!this.infoDiplomas.nft_image) {
        setTimeout(() => {
          this.captureService
            .getImage(this.screen.nativeElement, true)
            .pipe(
              tap((img) => {
                this.img = img;
              })
            )
            .subscribe(() => this.uploadDiplomas());
        }, 500);
      }
      else {
        this.hashCode = this.infoDiplomas.nft_data.data[0].transactionHash;
      }
    })
  }

  getUser() {
    this.userService.getCurrentUser().subscribe(data => {
      this.infoStudent = data.data;
      this.infoSchool = this.infoStudent.school[0];
    })
  }

  uploadDiplomas() {
    const body = {
      "data_image": this.img.split(',')[1]
    }
    this.fileService.uploadDiplomas(body).subscribe((res) => {
      this.dataNFT = res;
      this.bodyNFT = this.dataNFT.images_data.data[0]
      this.postNFT();
    })
  }

  postNFT() {
    const body = {
      "diplomas_id": this.idDiplomas,
      "image_data": this.bodyNFT
    }
    this.diplomasService.postNftDiplomas(body).subscribe(data => {
      this.hashCode = data.data.nft_data.data[0].transactionHash;
    })
  }

  viewNFT() {
    this.showLink = true;
  }

  openTab() {
    window.open("http://job.choivahoc.vn/");
  }

}
