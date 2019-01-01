import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { managementBarang } from './management-barang.component';

describe('UserProfileComponent', () => {
  let component: managementBarang;
  let fixture: ComponentFixture<managementBarang>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ managementBarang ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(managementBarang);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
