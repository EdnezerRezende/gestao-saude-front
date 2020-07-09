import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacienteAltaPage } from './paciente-alta.page';

describe('PacienteAltaPage', () => {
  let component: PacienteAltaPage;
  let fixture: ComponentFixture<PacienteAltaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteAltaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacienteAltaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
