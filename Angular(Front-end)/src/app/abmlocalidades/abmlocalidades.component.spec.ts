import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmlocalidadesComponent } from './abmlocalidades.component';

describe('AbmlocalidadesComponent', () => {
  let component: AbmlocalidadesComponent;
  let fixture: ComponentFixture<AbmlocalidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmlocalidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmlocalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
