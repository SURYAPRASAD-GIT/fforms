import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDFormsComponent } from './tdforms.component';

describe('TDFormsComponent', () => {
  let component: TDFormsComponent;
  let fixture: ComponentFixture<TDFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TDFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
