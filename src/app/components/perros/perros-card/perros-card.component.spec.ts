import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerrosCardComponent } from './perros-card.component';

describe('PerrosCardComponent', () => {
  let component: PerrosCardComponent;
  let fixture: ComponentFixture<PerrosCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerrosCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerrosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
