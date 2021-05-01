import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ReactiveFormsModule} from '@angular/forms';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { Camera } from '@ionic-native/camera/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { File } from '@ionic-native/file/ngx';

import firebase from 'firebase/app';
firebase.initializeApp(environment.firebase);


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,  
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
    ],
  providers: [
    Camera,
    File,
    NativeAudio,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
