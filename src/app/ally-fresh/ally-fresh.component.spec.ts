import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllyFreshComponent } from './ally-fresh.component';

describe('AllyFreshComponent', () => {
  let component: AllyFreshComponent;
  let fixture: ComponentFixture<AllyFreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllyFreshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllyFreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
