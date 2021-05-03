import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
const { Camera } = Plugins;

import * as firebase from 'firebase';
import { Router } from '@angular/router'

@Component({
  selector: 'app-malas',
  templateUrl: './malas.page.html',
  styleUrls: ['./malas.page.scss'],
})
export class MalasPage implements OnInit {

  private usuarioActual:string = "";
  mostrar:boolean = true;

  
  constructor(private router: Router) { }

  ngOnInit() {

    this.usuarioActual = localStorage.getItem('usuarioActual');
    this.mostrar = false;
  }

  async sacarFoto() {

    let capturedPhoto = await Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      webUseInput: true,
    });

    let dataUrl = capturedPhoto.dataUrl;
    let hora = new Date().getTime();
    let ubicacion = "malas/" + this.usuarioActual + "/" + hora;
    let ref = firebase.default.storage().ref(ubicacion);
    
    ref.putString(dataUrl, 'data_url',{
      contentType: 'image/jpeg',
    }).then(()=>{
      this.guardarReferencia(ubicacion);
    })

  }

  guardarReferencia(pReferencia: string): any {

    var storage = firebase.default.storage();
    var storageRef = storage.ref();
    var spaceRef = storageRef.child(pReferencia);

    spaceRef.getDownloadURL().then(url => {
      var messagesRef = firebase.default.database().ref().child("malas");
      messagesRef.push({ carpeta: "malas", usuario: this.usuarioActual, referencia: url });
    });
    return "";
  }

  salir()
  {
    this.router.navigate(['/login']);
  }

  verListadoFotosMalas() {
    this.router.navigate(['galeria-malas']);
  }

  verListadoMisFotosMalas() {
    this.router.navigate(['galeria-mis-malas']);
  }

  verGrafico() {
    this.router.navigate(['grafico-malas']);
  }

}