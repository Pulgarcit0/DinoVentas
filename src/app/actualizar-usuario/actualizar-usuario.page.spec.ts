import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarUsuarioPage } from './actualizar-usuario.page';

describe('ActualizarUsuarioPage', () => {
  let component: ActualizarUsuarioPage;
  let fixture: ComponentFixture<ActualizarUsuarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
