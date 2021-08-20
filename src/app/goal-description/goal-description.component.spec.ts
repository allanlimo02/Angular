import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalDescriptionComponent } from './goal-description.component';

describe('GoalDescriptionComponent', () => {
  let component: GoalDescriptionComponent;
  let fixture: ComponentFixture<GoalDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
