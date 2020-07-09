import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrigemListarPage } from './origem-listar.page';

describe('OrigemListarPage', () => {
  let component: OrigemListarPage;
  let fixture: ComponentFixture<OrigemListarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrigemListarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrigemListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
