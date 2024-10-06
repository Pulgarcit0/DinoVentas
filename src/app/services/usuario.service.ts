import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuariosCollection = this.firestore.collection('usuario');
  constructor(private firestore: AngularFirestore) { }
// Método para obtener un usuario específico por su ID
  getUsuario(id: string) {
    return this.usuariosCollection.doc(id).valueChanges();
  }
// Obtener todos los usuarios
  getUsuarios(): Observable<any[]> {
    return this.usuariosCollection.valueChanges({ idField: 'id' });
  }

// Función para agregar un usuario a Firebase
  addUsuario(usuario: any): Promise<void> {
    const id = this.firestore.createId();  // Generar un ID único
    return this.usuariosCollection.doc(id).set(usuario);  // Guardar el usuario en Firestore
  }

  // Método para actualizar un usuario existente
  updateUsuario(id: string, usuario: any): Promise<void> {
    return this.usuariosCollection.doc(id).update(usuario);
  }
  // Método para eliminar un usuario por su ID
  deleteUsuario(id: string): Promise<void> {
    return this.usuariosCollection.doc(id).delete();
  }


}
