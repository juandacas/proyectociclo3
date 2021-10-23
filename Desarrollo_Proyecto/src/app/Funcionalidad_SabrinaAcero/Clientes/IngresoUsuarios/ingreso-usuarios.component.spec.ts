import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoUsuariosComponent } from './ingreso-usuarios.component';

describe('RegistrarUsuariosComponent', () => {
  let component: IngresoUsuariosComponent;
  let fixture: ComponentFixture<IngresoUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
