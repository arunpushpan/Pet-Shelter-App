import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectAppComponent } from './reject-app.component';

describe('RejectAppComponent', () => {
  let component: RejectAppComponent;
  let fixture: ComponentFixture<RejectAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
