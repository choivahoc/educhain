import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// layouts
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { TeacherComponent } from './layouts/teacher/teacher.component';
import { AuthGuard } from './services/auth.guard';
import { NoAuthGuard } from './services/no-auth.guard';
import { StudentsComponent } from './layouts/students/students/students.component';

// admin views
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { SettingsComponent } from './views/admin/settings/settings.component';
import { TablesComponent } from './views/admin/tables/tables.component';

// auth views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { ClassDetailComponent } from './views/teacher/class-detail/class-detail.component';
import { DashboardTeachersComponent } from './views/teacher/dashboard-teachers/dashboard-teachers.component';
import { DashboardStudentsComponent } from './views/students/dashboard-students/dashboard-students.component';
import { SettingGuard } from './services/setting.guard';
import { DiplomasComponent } from './views/diplomas/diplomas.component';

// no layouts views

const routes: Routes = [
  // admin views
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent, canDeactivate: [SettingGuard] },
      { path: 'tables', component: TablesComponent },
    ],
    canActivate: [AuthGuard],
  },
  // student views
  {
    path: 'student',
    component: StudentsComponent,
    children: [
      { path: 'dashboard', component: DashboardStudentsComponent },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  // teaher views
  {
    path: 'teacher',
    component: TeacherComponent,
    children: [
      { path: 'dashboard', component: DashboardTeachersComponent },
      { path: 'class', component: ClassDetailComponent },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ],
  },
  // auth views
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ],
    canActivate: [NoAuthGuard]
  },
  // diplomas
  {
    path: 'diplomas',
    component: DiplomasComponent,
    loadChildren: () =>
      import('./views/diplomas/diplomas.module').then(
        (m) => m.DiplomasModule
      ),
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
