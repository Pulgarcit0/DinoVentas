import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../services/usuario.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  usuarios: any[] = [];  // Lista de usuarios

  constructor(
    private usuarioService: UsuarioService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe((data: any[]) => {
      this.usuarios = data;
    });
  }

  // Función para eliminar usuario
  async eliminarUsuario(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: '¿Seguro que quieres eliminar este usuario? Esta acción no se puede deshacer.',
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
            this.usuarioService.deleteUsuario(id).then(() => {
              console.log('Usuario eliminado');
            }).catch(err => {
              console.log('Error eliminando usuario:', err);
            });
          }
        }
      ]
    });

    await alert.present();
  }

}
