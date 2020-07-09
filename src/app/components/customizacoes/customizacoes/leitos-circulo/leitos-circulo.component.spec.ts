import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeitosCirculoComponent } from './leitos-circulo.component';

describe('LeitosCirculoComponent', () => {
  let component: LeitosCirculoComponent;
  let fixture: ComponentFixture<LeitosCirculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeitosCirculoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeitosCirculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
