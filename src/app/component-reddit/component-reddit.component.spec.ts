import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRedditComponent } from './component-reddit.component';

describe('ComponentRedditComponent', () => {
  let component: ComponentRedditComponent;
  let fixture: ComponentFixture<ComponentRedditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentRedditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
