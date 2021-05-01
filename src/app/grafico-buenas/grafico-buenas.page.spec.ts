import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GraficoBuenasPage } from './grafico-buenas.page';

describe('GraficoBuenasPage', () => {
  let component: GraficoBuenasPage;
  let fixture: ComponentFixture<GraficoBuenasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoBuenasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GraficoBuenasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
