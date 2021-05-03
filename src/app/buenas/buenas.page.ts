import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'app-buenas',
  templateUrl: './buenas.page.html',
  styleUrls: ['./buenas.page.scss'],
})
export class BuenasPage implements OnInit {

  private usuarioActual: string = "";
  public mostrar = true;

  constructor(private router: Router, private authService: AuthService) {
    this.usuarioActual = localStorage.getItem('usuarioActual');
  }


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
    let ubicacion = "buenas/" + this.usuarioActual + "/" + hora;
    let ref = firebase.default.storage().ref(ubicacion);
    
    ref.putString(dataUrl, 'data_url',{
      contentType: 'image/jpeg',
    }).then(()=>{
      this.guardarReferencia(ubicacion);
    })
    
  }

  guardarReferencia(pReferencia: string){
    console.log(pReferencia);
    let storage = firebase.default.storage();
    let storageRef = storage.ref();
    let spaceRef = storageRef.child(pReferencia);

    spaceRef.getDownloadURL().then(url => {
      debugger;
      let messagesRef = firebase.default.database().ref().child("buenas");
      messagesRef.push({ carpeta: "buenas", usuario: this.usuarioActual, referencia: url });
    });
    
  }

  async freno(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }

  salir() {
    //this.authService.logout();
    this.router.navigate(['/login']);
  }

  verListadoFotosLindas() {
    this.router.navigate(['/galeria-buenas']);
  }

  verListadoMisFotosLindas() {
    this.router.navigate(['/galeria-mis-buenas']);
  }
  verGrafico() {
    this.router.navigate(['/grafico-buenas']);
  }

}
