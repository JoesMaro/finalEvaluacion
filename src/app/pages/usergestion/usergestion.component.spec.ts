import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergestionComponent } from './usergestion.component';

describe('UsergestionComponent', () => {
  let component: UsergestionComponent;
  let fixture: ComponentFixture<UsergestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsergestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsergestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
