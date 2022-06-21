import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// layouts
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { StudentsComponent } from './layouts/students/students/students.component';

// admin views
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { SettingsComponent } from './views/admin/settings/settings.component';
import { TablesComponent } from './views/admin/tables/tables.component';

// auth views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { DashboardStudentsComponent } from './views/students/dashboard-students/dashboard-students.component';

// no layouts views

const routes: Routes = [
  // admin views
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'tables', component: TablesComponent },
    ],
  },
  // student views
  {
    path: 'student',
    component: StudentsComponent,
    children: [
      { path: 'dashboard', component: DashboardStudentsComponent },
    ],
  },
  // auth views
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  // no layout views
  // { path: 'profile', component: ProfileComponent },
  // { path: 'landing', component: LandingComponent },
  // { path: 'home', component: IndexComponent },
  { path: '**', redirectTo: 'admin/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
