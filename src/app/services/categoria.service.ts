import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private categoriasCollection = this.firestore.collection('categorias');  // Colección de categorías

  constructor(private firestore: AngularFirestore) { }

  // Obtener todas las categorías
  getCategorias(): Observable<any[]> {
    return this.categoriasCollection.valueChanges({ idField: 'id' });
  }

  // Obtener una categoría específica
  getCategoria(id: string): Observable<any> {
    return this.categoriasCollection.doc(id).valueChanges();
  }

  // Agregar una nueva categoría
  addCategoria(categoria: any): Promise<void> {
    const id = this.firestore.createId();
    return this.categoriasCollection.doc(id).set(categoria);
  }

  // Actualizar una categoría existente
  updateCategoria(id: string, categoria: any): Promise<void> {
    return this.categoriasCollection.doc(id).update(categoria);
  }

  // Eliminar una categoría
  deleteCategoria(id: string): Promise<void> {
    return this.categoriasCollection.doc(id).delete();
  }
}
