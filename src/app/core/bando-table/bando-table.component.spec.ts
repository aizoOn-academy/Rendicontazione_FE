import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandoTableComponent } from './bando-table.component';

describe('BandoTableComponent', () => {
  let component: BandoTableComponent;
  let fixture: ComponentFixture<BandoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandoTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
