import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kostya } from './kostya';

describe('Kostya', () => {
  let component: Kostya;
  let fixture: ComponentFixture<Kostya>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kostya]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kostya);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
