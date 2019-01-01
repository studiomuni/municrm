import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { addmanagementBarang } from './add-management-barang.component';

describe('UserProfileComponent', () => {
  let component: addmanagementBarang;
  let fixture: ComponentFixture<addmanagementBarang>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ addmanagementBarang ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(addmanagementBarang);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
