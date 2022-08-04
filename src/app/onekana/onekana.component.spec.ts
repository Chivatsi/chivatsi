import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnekanaComponent } from './onekana.component';

describe('OnekanaComponent', () => {
  let component: OnekanaComponent;
  let fixture: ComponentFixture<OnekanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnekanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnekanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
