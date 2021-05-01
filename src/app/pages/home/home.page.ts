import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  salir() {
   //this.auth.logout();
   this.router.navigate(['/login']);
  }

  clickMalas(){
    this.router.navigate(['/malas']);
  }

  clickBuenas(){
    this.router.navigate(['/buenas']);
  }

}
