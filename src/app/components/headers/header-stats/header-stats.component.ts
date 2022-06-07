import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header-stats',
  templateUrl: './header-stats.component.html',
})
export class HeaderStatsComponent implements OnInit {
  @Input() showNavbar: boolean;
  @Output() changeShowNavbar = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
