import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractSectionComponent } from './abstract-section.component';

describe('AbstractSectionComponent', () => {
  let component: AbstractSectionComponent;
  let fixture: ComponentFixture<AbstractSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
