import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarCategoriaPage } from './actualizar-categoria.page';

describe('ActualizarCategoriaPage', () => {
  let component: ActualizarCategoriaPage;
  let fixture: ComponentFixture<ActualizarCategoriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarCategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
