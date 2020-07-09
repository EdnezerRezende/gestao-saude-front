import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrigemDetalharPage } from './origem-detalhar.page';

describe('OrigemDetalharPage', () => {
  let component: OrigemDetalharPage;
  let fixture: ComponentFixture<OrigemDetalharPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrigemDetalharPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrigemDetalharPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
