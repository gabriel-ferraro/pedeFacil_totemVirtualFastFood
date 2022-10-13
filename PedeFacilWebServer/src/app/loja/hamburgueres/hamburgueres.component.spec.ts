import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgueresComponent } from './hamburgueres.component';

describe('HamburgueresComponent', () => {
  let component: HamburgueresComponent;
  let fixture: ComponentFixture<HamburgueresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburgueresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgueresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
