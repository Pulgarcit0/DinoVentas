import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsuarioService} from "../services/usuario.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.page.html',
  styleUrls: ['./actualizar-usuario.page.scss'],
})
export class ActualizarUsuarioPage implements OnInit {

  usuario: any = {};  // Datos del usuario a actualizar
  usuarioId: string = '';  // ID del usuario, siempre será una cadena

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    // Obtener el ID del usuario desde la URL y asignar una cadena vacía si es null
    this.usuarioId = this.route.snapshot.paramMap.get('id') || '';
    if (this.usuarioId) {
      this.loadUsuario();
    }
  }

  // Cargar los datos del usuario desde Firebase
  loadUsuario() {
    this.usuarioService.getUsuario(this.usuarioId).subscribe((data: any) => {
      this.usuario = data;
    });
  }

  // Método para actualizar el usuario en Firebase
  onSubmit() {
    this.usuarioService.updateUsuario(this.usuarioId, this.usuario).then(() => {
      this.navCtrl.navigateBack('/usuario');  // Redirigir a la lista de usuarios
    }).catch(err => {
      console.log('Error al actualizar usuario: ', err);
    });
  }
}
