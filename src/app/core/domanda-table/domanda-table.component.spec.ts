import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomandaTableComponent } from './domanda-table.component';

describe('DomandaTableComponent', () => {
  let component: DomandaTableComponent;
  let fixture: ComponentFixture<DomandaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomandaTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomandaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
