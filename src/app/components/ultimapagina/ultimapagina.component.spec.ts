import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimapaginaComponent } from './ultimapagina.component';

describe('UltimapaginaComponent', () => {
  let component: UltimapaginaComponent;
  let fixture: ComponentFixture<UltimapaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimapaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimapaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
