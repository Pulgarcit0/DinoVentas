import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productosCollection = this.firestore.collection('productos');  // Aquí guardamos la colección de productos

  constructor(private firestore: AngularFirestore) { }

  // Método para obtener todos los productos
  getProductos(): Observable<any[]> {
    return this.productosCollection.valueChanges({ idField: 'id' });
  }

  // Obtener un producto específico por su ID
  getProducto(id: string): Observable<any> {
    return this.productosCollection.doc(id).valueChanges();
  }

  // Agregar un nuevo producto
  addProducto(producto: any): Promise<void> {
    const id = this.firestore.createId();
    return this.productosCollection.doc(id).set(producto);
  }

  // Actualizar un producto
  updateProducto(id: string, producto: any): Promise<void> {
    return this.productosCollection.doc(id).update(producto);
  }

  // Eliminar un producto
  deleteProducto(id: string): Promise<void> {
    return this.productosCollection.doc(id).delete();
  }
}
