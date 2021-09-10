import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BassoComponent } from './basso.component';

describe('BassoComponent', () => {
  let component: BassoComponent;
  let fixture: ComponentFixture<BassoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BassoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
