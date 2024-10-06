import { Component, OnInit } from '@angular/core';
import {ProductoService} from "../services/producto.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage {


  // Objeto para almacenar los datos del nuevo producto
  producto = {
    Nombre: '',
    Categoria: '',
    Codigo: '',
    Descripcion: '',
    Precio: null,
    Stock: null,
    Disponibilidad: false,
    img: ''
  };

  constructor(
    private productoService: ProductoService,
    private navCtrl: NavController
  ) { }

  // Función para agregar el producto
  onSubmit() {
    this.productoService.addProducto(this.producto).then(() => {
      console.log('Producto agregado');
      this.navCtrl.navigateBack('/productos'); // Redirige a la lista de productos
    }).catch(err => {
      console.log('Error al agregar producto:', err);
    });
  }
}
