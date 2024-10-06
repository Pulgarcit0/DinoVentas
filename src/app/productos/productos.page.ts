import { Component, OnInit } from '@angular/core';
import {ProductoService} from "../services/producto.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos: any[] = [];  // Lista de productos

  constructor(
    private productoService: ProductoService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe((data: any[]) => {
      this.productos = data;
    });
  }

  // Función para eliminar un producto
  async eliminarProducto(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: '¿Seguro que quieres eliminar este producto? Esta acción no se puede deshacer.',
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
            this.productoService.deleteProducto(id).then(() => {
              console.log('Producto eliminado');
            }).catch(err => {
              console.log('Error eliminando producto:', err);
            });
          }
        }
      ]
    });

    await alert.present();
  }

}
