import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GraficoMalasPage } from './grafico-malas.page';

describe('GraficoMalasPage', () => {
  let component: GraficoMalasPage;
  let fixture: ComponentFixture<GraficoMalasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoMalasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GraficoMalasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
