import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }
  user = {
    username: "",
    password: ""
  }
  public mensaje = "Mensaje de prueba";

  mostrarConsola() {
    console.log(this.user)
  }
}
