import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeitoDetalharPage } from './leito-detalhar.page';

describe('LeitoDetalharPage', () => {
  let component: LeitoDetalharPage;
  let fixture: ComponentFixture<LeitoDetalharPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeitoDetalharPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeitoDetalharPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
