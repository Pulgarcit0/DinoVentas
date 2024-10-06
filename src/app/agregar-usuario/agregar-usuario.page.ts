import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../services/usuario.service";
import {NavController} from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.page.html',
  styleUrls: ['./agregar-usuario.page.scss'],
})
export class AgregarUsuarioPage implements OnInit {
  // Objeto que contiene los datos del nuevo usuario
  usuario = {
    Nombre: '',
    Correo: '',
    Direccion: '',
    Telefono: '',
    MetodoPago: '',
    img: ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  // Método que se ejecuta cuando se envía el formulario
  onSubmit() {
    this.usuarioService.addUsuario(this.usuario).then(() => {
      // Navegar de vuelta a la lista de usuarios después de agregar
      this.navCtrl.navigateBack('/usuario');
    }).catch(err => {
      console.log('Error al agregar usuario:', err);
    });
  }
}
