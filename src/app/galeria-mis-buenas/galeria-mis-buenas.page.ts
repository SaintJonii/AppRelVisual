import { Component, OnInit } from '@angular/core';
import { Imagen } from '../modulos/Imagen';
import * as firebase from 'firebase';
import { Router } from '@angular/router'


@Component({
  selector: 'app-galeria-mis-buenas',
  templateUrl: './galeria-mis-buenas.page.html',
  styleUrls: ['./galeria-mis-buenas.page.scss'],
})
export class GaleriaMisBuenasPage implements OnInit {

  public imagenes = new Array<Imagen>();
  public fotoCargada: boolean = false;
  mostrar: boolean = true;
  private usuarioActual: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.usuarioActual = localStorage.getItem('usuarioActual');
    this.traerImagenes();
  }


  traerImagenes() {

    var messagesRef = firebase.default.database().ref().child("buenas");
    messagesRef.on("value", (snap) => {
      var data = snap.val();

      for (var key in data) {

        console.log(data[key].usuario)

        if (data[key].usuario == this.usuarioActual) {
          this.imagenes.push(data[key]);
        }
      }
      this.mostrar = false;
      
    });
  }
  
  salir()
  {
    this.router.navigate(['/login']);
  }

  async freno(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }

}
