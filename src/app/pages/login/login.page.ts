import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string;
  pass: string;
  constructor(private auth: AuthService, private alertController: AlertController) { }

  ngOnInit() {
  }

  async login() {
    let validation:any = await this.auth.loginUser(this.user, this.pass);
    if(validation == 1){
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      subHeader: 'Credenciales incorrectas',
      message: 'Ingrese usuario y contraseña nuevamente',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
