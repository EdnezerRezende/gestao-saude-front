import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacientesComLeitoPage } from './pacientes-com-leito.page';

describe('PacientesComLeitoPage', () => {
  let component: PacientesComLeitoPage;
  let fixture: ComponentFixture<PacientesComLeitoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesComLeitoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacientesComLeitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
