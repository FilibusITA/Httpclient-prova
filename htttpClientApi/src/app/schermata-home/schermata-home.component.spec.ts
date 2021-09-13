import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchermataHomeComponent } from './schermata-home.component';

describe('SchermataHomeComponent', () => {
  let component: SchermataHomeComponent;
  let fixture: ComponentFixture<SchermataHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchermataHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchermataHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
