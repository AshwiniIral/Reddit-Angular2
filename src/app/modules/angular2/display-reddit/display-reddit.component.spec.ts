import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRedditComponent } from './display-reddit.component';

describe('DisplayRedditComponent', () => {
  let component: DisplayRedditComponent;
  let fixture: ComponentFixture<DisplayRedditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRedditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
