import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizasListComponent } from './pizas-list.component';

describe('PizasListComponent', () => {
  let component: PizasListComponent;
  let fixture: ComponentFixture<PizasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
