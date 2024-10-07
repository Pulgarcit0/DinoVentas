import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {CategoriaService} from "../services/categoria.service";

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.page.html',
  styleUrls: ['./agregar-categoria.page.scss'],
})
export class AgregarCategoriaPage implements OnInit {
  categoria = {
    Nombre: '',
    Descripcion: ''
  };

  constructor(
    private categoriaService: CategoriaService,
    private navCtrl: NavController
  ) { }

  onSubmit() {
    this.categoriaService.addCategoria(this.categoria).then(() => {
      console.log('Categoría agregada');
      this.navCtrl.navigateBack('/categorias');
    }).catch(err => {
      console.log('Error al agregar categoría:', err);
    });
  }

  ngOnInit() {
  }

}
