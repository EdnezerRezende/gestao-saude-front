import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeitosOcupacaoPage } from './leitos-ocupacao.page';

describe('LeitosOcupacaoPage', () => {
  let component: LeitosOcupacaoPage;
  let fixture: ComponentFixture<LeitosOcupacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeitosOcupacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeitosOcupacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
