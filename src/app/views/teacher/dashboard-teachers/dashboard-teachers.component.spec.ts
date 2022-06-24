import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTeachersComponent } from './dashboard-teachers.component';

describe('DashboardTeachersComponent', () => {
  let component: DashboardTeachersComponent;
  let fixture: ComponentFixture<DashboardTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
