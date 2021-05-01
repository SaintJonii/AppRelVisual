import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GaleriaBuenasPage } from './galeria-buenas.page';

describe('GaleriaBuenasPage', () => {
  let component: GaleriaBuenasPage;
  let fixture: ComponentFixture<GaleriaBuenasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaBuenasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GaleriaBuenasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
