import { Component, OnInit, ViewChild } from "@angular/core";
import { CardSettingsComponent } from "src/app/components/cards/card-settings/card-settings.component";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit {
  @ViewChild('cardSetting') settingRef : CardSettingsComponent;
  constructor() {}

  ngOnInit(): void {}
}
