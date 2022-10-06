import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPizaComponent } from './alta-piza.component';

describe('AltaPizaComponent', () => {
  let component: AltaPizaComponent;
  let fixture: ComponentFixture<AltaPizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaPizaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaPizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
