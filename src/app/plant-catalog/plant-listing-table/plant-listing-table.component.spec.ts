import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantListingTableComponent } from './plant-listing-table.component';

describe('PlantListingTableComponent', () => {
  let component: PlantListingTableComponent;
  let fixture: ComponentFixture<PlantListingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantListingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
