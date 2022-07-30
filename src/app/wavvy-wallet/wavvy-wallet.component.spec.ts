import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavvyWalletComponent } from './wavvy-wallet.component';

describe('WavvyWalletComponent', () => {
  let component: WavvyWalletComponent;
  let fixture: ComponentFixture<WavvyWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavvyWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WavvyWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
