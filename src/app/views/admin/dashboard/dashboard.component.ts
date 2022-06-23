import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {


  constructor() { }
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

  ngOnInit() {
    let a;
    this.department.findIndex(data => data.nganh = a)
    console.log(a);

  }
}
