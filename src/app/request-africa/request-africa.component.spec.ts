import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAfricaComponent } from './request-africa.component';

describe('RequestAfricaComponent', () => {
  let component: RequestAfricaComponent;
  let fixture: ComponentFixture<RequestAfricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAfricaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAfricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
