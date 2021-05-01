import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GaleriaMisMalasPage } from './galeria-mis-malas.page';

describe('GaleriaMisMalasPage', () => {
  let component: GaleriaMisMalasPage;
  let fixture: ComponentFixture<GaleriaMisMalasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaMisMalasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GaleriaMisMalasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
