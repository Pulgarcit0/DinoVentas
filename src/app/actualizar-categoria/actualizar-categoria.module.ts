import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarCategoriaPageRoutingModule } from './actualizar-categoria-routing.module';

import { ActualizarCategoriaPage } from './actualizar-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarCategoriaPageRoutingModule
  ],
  declarations: [ActualizarCategoriaPage]
})
export class ActualizarCategoriaPageModule {}
