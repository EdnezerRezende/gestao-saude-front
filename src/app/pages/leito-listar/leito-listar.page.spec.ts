import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeitoListarPage } from './leito-listar.page';

describe('LeitoListarPage', () => {
  let component: LeitoListarPage;
  let fixture: ComponentFixture<LeitoListarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeitoListarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeitoListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
