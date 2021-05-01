import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Chart from "chart.js"
import { Imagen } from '../modulos/Imagen';
import { Like } from '../modulos/Like';
import { AuthService } from '../services/auth.service';
import { ImagenesService } from '../services/imagenes.service';

@Component({
  selector: 'app-grafico-malas',
  templateUrl: './grafico-malas.page.html',
  styleUrls: ['./grafico-malas.page.scss'],
})
export class GraficoMalasPage implements OnInit {

  public miChart: Chart;
  public images: Array<Imagen> =  new Array<Imagen>();
  public likesPorImagen: Array<number> = new Array<number>();
  public likes: Array<Like>;
  public arrayMalasLikes: Array<number>;
  public referencias: Array<string>;

  constructor(private ref: ChangeDetectorRef, private servicioImagenes: ImagenesService, private authService: AuthService,
              private router: Router) { 

                this.likes = new Array<Like>();
                this.likes =  servicioImagenes.traerLikes();

              }

  ngOnInit() {
     this.ref.detectChanges();

     this.images = this.servicioImagenes.TraerImagenesMalas();

    for (var item in this.images) {
      this.likesPorImagen.push(this.images[item].likes);
    }

    var arrayMalas: Array<Imagen> = JSON.parse(localStorage.getItem('array'));
    
    this.arrayMalasLikes = new Array<number>();
    this.referencias = new Array<string>();

    for(var item in arrayMalas) {
      console.log(arrayMalas[item].referencia.toString());
        this.arrayMalasLikes.push(this.likesPorFoto(arrayMalas[item].referencia.toString()));
        this.referencias.push(arrayMalas[item].referencia.toString());
    }
    
    this.GenerarCharts();
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

   GenerarCharts() {
    var ctx = document.getElementById('myChart');
    var miChart = new Chart(ctx, {
    type: 'pie',
    data: {
          labels: this.arrayMalasLikes,
        datasets: [{
            label:  this.referencias,
            data: this.arrayMalasLikes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)'
            ],
            borderWidth: 2
        }]
    },
    options: {
      legend: {
        labels: {
            // This more specific font property overrides the global property
            fontColor: 'white'
        }     
      }
    }
});



ctx.onclick = function(e) {
  var slice = miChart.getElementAtEvent(e);
  if (!slice.length) return; // return if not clicked on slice
  var label = slice[0]._model.label;
  console.log(label);
  window.open(label);
  }
  this.miChart = miChart;

   }



  salir()
  {
    localStorage.clear();
    //this.authService.logout();
    this.router.navigate(['/login']);
  }

}
