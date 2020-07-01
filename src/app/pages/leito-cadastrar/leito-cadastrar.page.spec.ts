import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeitoCadastrarPage } from './leito-cadastrar.page';

describe('LeitoCadastrarPage', () => {
  let component: LeitoCadastrarPage;
  let fixture: ComponentFixture<LeitoCadastrarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeitoCadastrarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeitoCadastrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
