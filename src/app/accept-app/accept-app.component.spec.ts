import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptAppComponent } from './accept-app.component';

describe('AcceptAppComponent', () => {
  let component: AcceptAppComponent;
  let fixture: ComponentFixture<AcceptAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
