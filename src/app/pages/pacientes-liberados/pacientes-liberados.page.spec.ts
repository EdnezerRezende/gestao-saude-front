import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacientesLiberadosPage } from './pacientes-liberados.page';

describe('PacientesLiberadosPage', () => {
  let component: PacientesLiberadosPage;
  let fixture: ComponentFixture<PacientesLiberadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesLiberadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacientesLiberadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
