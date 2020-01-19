import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantCatalogComponent } from './plant-catalog.component';

describe('PlantCatalogComponent', () => {
  let component: PlantCatalogComponent;
  let fixture: ComponentFixture<PlantCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
