import { Component, OnInit } from '@angular/core';
import {CategoriaService} from "../services/categoria.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  categorias: any[] = [];  // Lista de categorías

  constructor(
    private categoriaService: CategoriaService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe((data: any[]) => {
      this.categorias = data;
    });
  }

  // Función para eliminar una categoría
  async eliminarCategoria(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: '¿Seguro que quieres eliminar esta categoría? Esta acción no se puede deshacer.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Eliminación cancelada');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            this.categoriaService.deleteCategoria(id).then(() => {
              console.log('Categoría eliminada');
            }).catch(err => {
              console.log('Error al eliminar categoría:', err);
            });
          }
        }
      ]
    });

    await alert.present();
  }

}
