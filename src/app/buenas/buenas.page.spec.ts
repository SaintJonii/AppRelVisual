import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuenasPage } from './buenas.page';

describe('BuenasPage', () => {
  let component: BuenasPage;
  let fixture: ComponentFixture<BuenasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuenasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuenasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
