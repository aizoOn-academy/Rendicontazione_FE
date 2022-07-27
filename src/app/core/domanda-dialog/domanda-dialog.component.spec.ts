import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomandaDialogComponent } from './domanda-dialog.component';

describe('DomandaDialogComponent', () => {
  let component: DomandaDialogComponent;
  let fixture: ComponentFixture<DomandaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomandaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomandaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
