import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesComponent } from './graphic-des.component';

describe('GraphicDesComponent', () => {
  let component: GraphicDesComponent;
  let fixture: ComponentFixture<GraphicDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
