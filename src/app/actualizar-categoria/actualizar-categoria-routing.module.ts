import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarCategoriaPage } from './actualizar-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarCategoriaPageRoutingModule {}
