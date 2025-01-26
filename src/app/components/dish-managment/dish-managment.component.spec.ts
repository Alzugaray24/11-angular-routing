import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishManagementComponent } from './dish-managment.component';

describe('DishManagmentComponent', () => {
  let component: DishManagementComponent;
  let fixture: ComponentFixture<DishManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DishManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
