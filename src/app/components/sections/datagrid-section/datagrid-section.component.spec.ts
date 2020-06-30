import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridSectionComponent } from './datagrid-section.component';

describe('DatagridSectionComponent', () => {
  let component: DatagridSectionComponent;
  let fixture: ComponentFixture<DatagridSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagridSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
