import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {ProductoService} from "../services/producto.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.page.html',
  styleUrls: ['./actualizar-producto.page.scss'],
})
export class ActualizarProductoPage implements OnInit {

  producto: any = {};  // Datos del producto a actualizar
  productoId: string = '';  // ID del producto

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    // Obtener el ID del producto desde la URL
    this.productoId = this.route.snapshot.paramMap.get('id') || '';
    if (this.productoId) {
      this.loadProducto();
    }
  }

  // Cargar los datos del producto desde Firebase
  loadProducto() {
    this.productoService.getProducto(this.productoId).subscribe((data: any) => {
      this.producto = data;
    });
  }

  // Función para actualizar el producto en Firebase
  onSubmit() {
    this.productoService.updateProducto(this.productoId, this.producto).then(() => {
      console.log('Producto actualizado');
      this.navCtrl.navigateBack('/productos');  // Redirige a la lista de productos
    }).catch(err => {
      console.log('Error al actualizar producto:', err);
    });
  }

}
