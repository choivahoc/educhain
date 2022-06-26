import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  constructor() { }

  ngOnInit(): void {
  }
  

  departments = [
    {
      departmentName: "IT",
      class: [
        {
          id: "IT1",
          name: "Class IT1",
          students: [
            {
              MSSV: "01",
              studentName: "Nguyen Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "02",
              studentName: "Luu Ba C",
              gender: "male",
              age: "20",
              email: "anv@gmail.com",
            },
            {
              MSSV: "03",
              studentName: "Cao Nhat D ",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "04",
              studentName: "Bui Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "05",
              studentName: "Nguyen Thi S",
              gender: "female",
              age: "21",
              email: "anv@gmail.com",
            },
            {
              MSSV: "06",
              studentName: "Cao Van F",
              gender: "female",
              age: "19",
              email: "anv@gmail.com",
            },
          ],
        },
        {
          id: "IT2",
          name: "Class IT2",
          students: [
            {
              MSSV: "01",
              studentName: "Nguyen Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "02",
              studentName: "Luu Ba C",
              gender: "male",
              age: "20",
              email: "anv@gmail.com",
            },
            {
              MSSV: "03",
              studentName: "Cao Nhat D ",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "04",
              studentName: "Bui Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "05",
              studentName: "Nguyen Thi S",
              gender: "female",
              age: "21",
              email: "anv@gmail.com",
            },
            {
              MSSV: "06",
              studentName: "Cao Van F",
              gender: "female",
              age: "19",
              email: "anv@gmail.com",
            },
          ],
        },
        {
          id: "IT3",
          name: "Class IT3",
          students: [
            {
              MSSV: "01",
              studentName: "Nguyen Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "02",
              studentName: "Luu Ba C",
              gender: "male",
              age: "20",
              email: "anv@gmail.com",
            },
            {
              MSSV: "03",
              studentName: "Cao Nhat D ",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "04",
              studentName: "Bui Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "05",
              studentName: "Nguyen Thi S",
              gender: "female",
              age: "21",
              email: "anv@gmail.com",
            },
            {
              MSSV: "06",
              studentName: "Cao Van F",
              gender: "female",
              age: "19",
              email: "anv@gmail.com",
            },
          ],
        },
      ],
    },
    {
      departmentName: "English",
      class: [
        {
          id: "E1",
          name: "Class English 1",
          students: [
            {
              MSSV: "01",
              studentName: "Nguyen Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "02",
              studentName: "Luu Ba C",
              gender: "male",
              age: "20",
              email: "anv@gmail.com",
            },
            {
              MSSV: "03",
              studentName: "Cao Nhat D ",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "04",
              studentName: "Bui Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "05",
              studentName: "Nguyen Thi S",
              gender: "female",
              age: "21",
              email: "anv@gmail.com",
            },
            {
              MSSV: "06",
              studentName: "Cao Van F",
              gender: "female",
              age: "19",
              email: "anv@gmail.com",
            },
          ],
        },
        {
          id: "E2",
          name: "Class English 2",
          students: [
            {
              MSSV: "01",
              studentName: "Nguyen Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "02",
              studentName: "Luu Ba C",
              gender: "male",
              age: "20",
              email: "anv@gmail.com",
            },
            {
              MSSV: "03",
              studentName: "Cao Nhat D ",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "04",
              studentName: "Bui Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "05",
              studentName: "Nguyen Thi S",
              gender: "female",
              age: "21",
              email: "anv@gmail.com",
            },
            {
              MSSV: "06",
              studentName: "Cao Van F",
              gender: "female",
              age: "19",
              email: "anv@gmail.com",
            },
          ],
        },
        {
          id: "E3",
          name: "Class English 3",
          students: [
            {
              MSSV: "01",
              studentName: "Nguyen Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "02",
              studentName: "Luu Ba C",
              gender: "male",
              age: "20",
              email: "anv@gmail.com",
            },
            {
              MSSV: "03",
              studentName: "Cao Nhat D ",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "04",
              studentName: "Bui Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "05",
              studentName: "Nguyen Thi S",
              gender: "female",
              age: "21",
              email: "anv@gmail.com",
            },
            {
              MSSV: "06",
              studentName: "Cao Van F",
              gender: "female",
              age: "19",
              email: "anv@gmail.com",
            },
          ],
        },
      ],
    },
    {
      departmentName: "Music",
      class: [
        {
          id: "M1",
          name: "Class Music1",
          students: [
            {
              MSSV: "01",
              studentName: "Nguyen Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "02",
              studentName: "Luu Ba C",
              gender: "male",
              age: "20",
              email: "anv@gmail.com",
            },
            {
              MSSV: "03",
              studentName: "Cao Nhat D ",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "04",
              studentName: "Bui Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "05",
              studentName: "Nguyen Thi S",
              gender: "female",
              age: "21",
              email: "anv@gmail.com",
            },
            {
              MSSV: "06",
              studentName: "Cao Van F",
              gender: "female",
              age: "19",
              email: "anv@gmail.com",
            },
          ],
        },
        {
          id: "M2",
          name: "Class Music2",
          students: [
            {
              MSSV: "01",
              studentName: "Nguyen Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "02",
              studentName: "Luu Ba C",
              gender: "male",
              age: "20",
              email: "anv@gmail.com",
            },
            {
              MSSV: "03",
              studentName: "Cao Nhat D ",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "04",
              studentName: "Bui Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "05",
              studentName: "Nguyen Thi S",
              gender: "female",
              age: "21",
              email: "anv@gmail.com",
            },
            {
              MSSV: "06",
              studentName: "Cao Van F",
              gender: "female",
              age: "19",
              email: "anv@gmail.com",
            },
          ],
        },
        {
          id: "M3",
          name: "Class Music3",
          students: [
            {
              MSSV: "01",
              studentName: "Nguyen Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "02",
              studentName: "Luu Ba C",
              gender: "male",
              age: "20",
              email: "anv@gmail.com",
            },
            {
              MSSV: "03",
              studentName: "Cao Nhat D ",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "04",
              studentName: "Bui Van A",
              gender: "male",
              age: "18",
              email: "anv@gmail.com",
            },
            {
              MSSV: "05",
              studentName: "Nguyen Thi S",
              gender: "female",
              age: "21",
              email: "anv@gmail.com",
            },
            {
              MSSV: "06",
              studentName: "Cao Van F",
              gender: "female",
              age: "19",
              email: "anv@gmail.com",
            },
          ],
        },
      ],
    },
  ];

}