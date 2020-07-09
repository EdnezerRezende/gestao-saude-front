import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoencaListarPage } from './doenca-listar.page';

describe('DoencaListarPage', () => {
  let component: DoencaListarPage;
  let fixture: ComponentFixture<DoencaListarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoencaListarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoencaListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
