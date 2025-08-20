import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Continue } from './continue';

describe('Continue', () => {
  let component: Continue;
  let fixture: ComponentFixture<Continue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Continue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Continue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
