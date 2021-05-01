import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GaleriaMisBuenasPage } from './galeria-mis-buenas.page';

describe('GaleriaMisBuenasPage', () => {
  let component: GaleriaMisBuenasPage;
  let fixture: ComponentFixture<GaleriaMisBuenasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaMisBuenasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GaleriaMisBuenasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
