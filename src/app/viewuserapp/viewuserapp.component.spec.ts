import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserappComponent } from './viewuserapp.component';

describe('ViewuserappComponent', () => {
  let component: ViewuserappComponent;
  let fixture: ComponentFixture<ViewuserappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewuserappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewuserappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
