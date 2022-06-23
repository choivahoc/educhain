import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import Swal from 'sweetalert2'
import { CardSettingsComponent } from '../components/cards/card-settings/card-settings.component';
import { SettingsComponent } from '../views/admin/settings/settings.component';

@Injectable({
  providedIn: 'root'
})
export class SettingGuard implements CanDeactivate<SettingsComponent> {

  constructor(public translate: TranslateService){}
  canDeactivate(
    component: SettingsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (component.settingRef.settingsForm.dirty && !component.settingRef.isSubmit) {
        return Swal.fire({
          icon: 'question',
          title: this.translate.instant('CONFIRM.LEAVE'),
          showCancelButton: true,
          confirmButtonText: 'Yes',
          confirmButtonColor: '#fa6342',
          
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            return true 
          } else {
            return false
          }
        })
    } else {
      return true;
    }
  }
}