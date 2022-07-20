import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs/operators';
import { CopyContentService } from 'src/app/services/copy.service';
import { DiplomasService } from 'src/app/services/diplomas.service';
import { FileService } from 'src/app/services/file.service';
import { TeacherService } from 'src/app/services/teacher.service';
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
  idSV: any;
  img = '';
  dataNFT: any;
  bodyNFT: any;
  hashCode: any;
  showLink: boolean;
  errorData: boolean = false;

  constructor(
    private active: ActivatedRoute,
    private router: Router,
    private diplomasService: DiplomasService,
    private userService: UserService,
    private translate: TranslateService,
    private captureService: NgxCaptureService,
    private fileService: FileService,
    private teacherService: TeacherService,
    private copier: CopyContentService
  ) { }

  ngOnInit() {
    this.idDiplomas = this.active.snapshot.queryParams.id;
    this.idSV = this.active.snapshot.queryParams.idSV;
    this.getInfoDiplomas(this.idDiplomas);
    // this.getUser();
  }
  getInfoDiplomas(id: any) {
    this.diplomasService.getPoint(id).subscribe(data => {
      this.infoDiplomas = data.data[0];
      this.infoStudent = this.infoDiplomas.graduate_info[0].en.user;
      this.infoSchool = this.infoDiplomas.graduate_info[0].en;


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
        if (this.infoDiplomas.nft_data === "Error") {
          this.errorData = true;
        }
        else {
          this.hashCode = this.infoDiplomas?.nft_data?.data[0]?.transactionHash;
        }
      }
    })
  }

  getUser() {
    this.infoStudent = this.infoDiplomas.graduate_info[0].en.user;
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
    },
      (err) => {
        alert("Error gen NFT")
      }
    )
  }

  viewNFT() {
    this.showLink = true;
    this.copier.copyText(this.hashCode);
  }

  openTab() {
    this.copier.copyText(this.hashCode);
    window.open("http://job.choivahoc.vn/");
  }

  toggleModal() {
    this.showLink = !this.showLink;
  }

}
