import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDevComponent } from './software-dev.component';

describe('SoftwareDevComponent', () => {
  let component: SoftwareDevComponent;
  let fixture: ComponentFixture<SoftwareDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
