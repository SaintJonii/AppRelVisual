import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MalasPage } from './malas.page';

describe('MalasPage', () => {
  let component: MalasPage;
  let fixture: ComponentFixture<MalasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MalasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
