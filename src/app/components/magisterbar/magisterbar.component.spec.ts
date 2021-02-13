import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagisterbarComponent } from './magisterbar.component';

describe('MagisterbarComponent', () => {
  let component: MagisterbarComponent;
  let fixture: ComponentFixture<MagisterbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagisterbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagisterbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
