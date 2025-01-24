import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishManagmentComponent } from './dish-managment.component';

describe('DishManagmentComponent', () => {
  let component: DishManagmentComponent;
  let fixture: ComponentFixture<DishManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishManagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
