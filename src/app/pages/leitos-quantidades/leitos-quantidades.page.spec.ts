import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeitosQuantidadesPage } from './leitos-quantidades.page';

describe('LeitosQuantidadesPage', () => {
  let component: LeitosQuantidadesPage;
  let fixture: ComponentFixture<LeitosQuantidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeitosQuantidadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeitosQuantidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
