import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustComponent } from './list-cust.component';

describe('ListCustComponent', () => {
  let component: ListCustComponent;
  let fixture: ComponentFixture<ListCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
