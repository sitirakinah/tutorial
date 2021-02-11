import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortfolionewPage } from './portfolionew.page';

describe('PortfolionewPage', () => {
  let component: PortfolionewPage;
  let fixture: ComponentFixture<PortfolionewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolionewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolionewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
