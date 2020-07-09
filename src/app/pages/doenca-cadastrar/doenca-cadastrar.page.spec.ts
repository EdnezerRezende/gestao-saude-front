import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoencaCadastrarPage } from './doenca-cadastrar.page';

describe('DoencaCadastrarPage', () => {
  let component: DoencaCadastrarPage;
  let fixture: ComponentFixture<DoencaCadastrarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoencaCadastrarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoencaCadastrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
