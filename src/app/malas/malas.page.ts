import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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

  
  constructor(private camera: Camera, private router: Router) { }

  ngOnInit() {

    this.usuarioActual = localStorage.getItem('usuarioActual');
    this.mostrar = false;
  }

  async sacarFoto() {

    const options: CameraOptions = {
      quality: 100,
      targetHeight: 600,
      targetWidth: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation:true
    }

    try {

      let hora = Date.now();
      let ubicacion = "malas/" + this.usuarioActual + "/" + hora;     
      const result = await this.camera.getPicture(options);
      const image = `data:image/jpeg;base64,${result}`;
      const picture = firebase.default.storage().ref(ubicacion);
      picture.putString(image, 'data_url').then(()=>{
        this.guardarReferencia(ubicacion);
      });
    }
    catch (e) {
      console.log(e.error);
    }

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