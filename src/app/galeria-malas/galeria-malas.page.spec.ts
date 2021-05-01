import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GaleriaMalasPage } from './galeria-malas.page';

describe('GaleriaMalasPage', () => {
  let component: GaleriaMalasPage;
  let fixture: ComponentFixture<GaleriaMalasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaMalasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GaleriaMalasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
