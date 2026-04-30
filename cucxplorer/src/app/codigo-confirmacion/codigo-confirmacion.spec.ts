import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoConfirmacion } from './codigo-confirmacion';

describe('CodigoConfirmacion', () => {
  let component: CodigoConfirmacion;
  let fixture: ComponentFixture<CodigoConfirmacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodigoConfirmacion],
    }).compileComponents();

    fixture = TestBed.createComponent(CodigoConfirmacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
