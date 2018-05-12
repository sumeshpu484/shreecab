import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransportAdminComponent } from './add-transport-admin.component';

describe('AddTransportAdminComponent', () => {
  let component: AddTransportAdminComponent;
  let fixture: ComponentFixture<AddTransportAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTransportAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransportAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
