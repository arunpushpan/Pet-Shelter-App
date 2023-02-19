import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehomeStatusComponent } from './rehome-status.component';

describe('RehomeStatusComponent', () => {
  let component: RehomeStatusComponent;
  let fixture: ComponentFixture<RehomeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RehomeStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RehomeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
