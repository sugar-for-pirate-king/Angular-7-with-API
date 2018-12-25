import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrxFormEditComponent } from './trx-form-edit.component';

describe('TrxFormEditComponent', () => {
  let component: TrxFormEditComponent;
  let fixture: ComponentFixture<TrxFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrxFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrxFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
