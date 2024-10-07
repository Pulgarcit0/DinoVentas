import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoriaService} from "../services/categoria.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-actualizar-categoria',
  templateUrl: './actualizar-categoria.page.html',
  styleUrls: ['./actualizar-categoria.page.scss'],
})
export class ActualizarCategoriaPage implements OnInit {

  categoria = {
    Nombre: '',
    Descripcion: ''
  };
  categoriaId: string = '';

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.categoriaId = this.route.snapshot.paramMap.get('id') || '';
    if (this.categoriaId) {
      this.loadCategoria();
    }
  }

  loadCategoria() {
    this.categoriaService.getCategoria(this.categoriaId).subscribe((data: any) => {
      this.categoria = data;
    });
  }

  onSubmit() {
    this.categoriaService.updateCategoria(this.categoriaId, this.categoria).then(() => {
      console.log('Categoría actualizada');
      this.navCtrl.navigateBack('/categoria');
    }).catch(err => {
      console.log('Error al actualizar categoría:', err);
    });
  }

}
