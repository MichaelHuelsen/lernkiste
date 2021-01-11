import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumpadButtonComponent } from './numpad-button.component';

describe('NumpadButtonComponent', () => {
  let component: NumpadButtonComponent;
  let fixture: ComponentFixture<NumpadButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumpadButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumpadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
