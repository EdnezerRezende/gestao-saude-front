import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoencaDetalharPage } from './doenca-detalhar.page';

describe('DoencaDetalharPage', () => {
  let component: DoencaDetalharPage;
  let fixture: ComponentFixture<DoencaDetalharPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoencaDetalharPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoencaDetalharPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
