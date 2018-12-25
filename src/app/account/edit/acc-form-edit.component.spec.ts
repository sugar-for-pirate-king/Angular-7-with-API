import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFormEditComponent } from './acc-form-edit.component';

describe('AccFormEditComponent', () => {
  let component: AccFormEditComponent;
  let fixture: ComponentFixture<AccFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
