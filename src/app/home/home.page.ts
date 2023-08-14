import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  user = {
    usuario: "",
    password: ""
  }
  public mensaje = "";

  mostrarConsola() {
    console.log(this.user)
    if (this.user.usuario != "" && this.user.password != "") {
      this.mensaje = "Conexion Exitosa"
    } else {
      this.mensaje = "Error al ingresar"
    }
  }
}
