import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjamComponent } from './ujam.component';

describe('UjamComponent', () => {
  let component: UjamComponent;
  let fixture: ComponentFixture<UjamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UjamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UjamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
