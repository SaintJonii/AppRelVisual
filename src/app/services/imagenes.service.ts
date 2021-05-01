import { Injectable } from '@angular/core';
import { Imagen } from '../modulos/Imagen';
import * as firebase from 'firebase';
import { Like } from '../modulos/Like';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  public likes: Array<Like>;

  constructor() { 

    this.traerLikes();
  }


  TraerImagenesBuenas() {

    var imagenes = new Array<Imagen>();

    var messagesRef = firebase.default.database().ref('buenas/');
    
    messagesRef.on("value", (snap) => {
      var data = snap.val();
    localStorage.setItem('array', JSON.stringify(data));
      for (var key in data) {
        imagenes.push(data[key]);
      }
      imagenes.reverse();

      for (var key in imagenes) {
        imagenes[key].likes = this.likesPorFoto(imagenes[key].referencia);
      }
    
    });

    return imagenes;
  }

  TraerImagenesMalas() {

    var imagenes = new Array<Imagen>();

    var messagesRef = firebase.default.database().ref('malas/');
    
    messagesRef.on("value", (snap) => {
      var data = snap.val();
    localStorage.setItem('array', JSON.stringify(data));
      for (var key in data) {
        imagenes.push(data[key]);
      }
      imagenes.reverse();

      for (var key in imagenes) {
        imagenes[key].likes = this.likesPorFoto(imagenes[key].referencia);
      }
    
    });

    return imagenes;
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
    var messagesRef = firebase.default.database().ref('likes/');
    messagesRef.on("value", (snap) => {
      var data = snap.val();
      for (var key in data) {
        this.likes.push(data[key]);
      }
  
    });
    return this.likes;
}
}