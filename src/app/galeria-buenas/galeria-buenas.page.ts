import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { Imagen } from '../modulos/Imagen';
import { Like } from '../modulos/Like';
import { Router } from '@angular/router'

@Component({
  selector: 'app-galeria-buenas',
  templateUrl: './galeria-buenas.page.html',
  styleUrls: ['./galeria-buenas.page.scss'],
})
export class GaleriaBuenasPage implements OnInit {

  public imagenes:Array<Imagen>;
  public likes: Array<Like>;
  public imgUrl: string = "";
  public mostrar = true;
  public usuarioActual: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.usuarioActual = localStorage.getItem('usuarioActual');
    this.traerLikes();
    this.traerImagenes();
  }

  traerImagenes() {

    this.imagenes = new Array<Imagen>();

    var messagesRef = firebase.default.database().ref().child("buenas");
    messagesRef.on("value", (snap) => {
      var data = snap.val();

      for (var key in data) {
        this.imagenes.push(data[key]);
      }

      this.imagenes.reverse();

      for (var key in this.imagenes) {
        this.imagenes[key].likes = this.likesPorFoto(this.imagenes[key].referencia);
      }
      this.mostrar = false;
    });
  }

  like(imagen: Imagen) {
    
    let fechaActual = Date.now();
    var usuariosRef = firebase.default.database().ref().child("likes");
    usuariosRef.push({ 
      referencia: imagen.referencia, 
      usuario: this.usuarioActual,
       fecha: fechaActual 
      }).then(() => {
      this.mostrar = true;
      this.traerLikes();
      this.traerImagenes();
    });
  }

  puedeDarleLike(imagen: Imagen): boolean {

    for (var key in this.likes) {
      if (this.likes[key].referencia == imagen.referencia) {
        if (this.likes[key].usuario == this.usuarioActual) {
          return false;
        }
      }
    }
    return true;
  }

  likesPorFoto(pReferencia: string): number {

    let contador = 0;
    for (var key in this.likes) {
      if (this.likes[key].referencia == pReferencia) {
        contador += 1;
      }
    }
    return contador;
  }

  traerLikes() {

    this.likes = new Array<Like>();
    var messagesRef = firebase.default.database().ref().child("likes");
    messagesRef.on("value", (snap) => {
      var data = snap.val();
      for (var key in data) {
        this.likes.push(data[key]);
      }
  
    });

  }

  async freno(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }

  salir() {
    this.router.navigate(['/login']);
  }

}
