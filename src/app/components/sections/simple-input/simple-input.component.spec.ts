import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleInputSection } from './simple-input.component';

describe('SimpleInputComponent', () => {
  let component: SimpleInputSection;
  let fixture: ComponentFixture<SimpleInputSection>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleInputSection],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleInputSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
