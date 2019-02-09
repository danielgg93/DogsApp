import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPerrosComponent } from './inicio-perros.component';

describe('InicioPerrosComponent', () => {
  let component: InicioPerrosComponent;
  let fixture: ComponentFixture<InicioPerrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioPerrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
