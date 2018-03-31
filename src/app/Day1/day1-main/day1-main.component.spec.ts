import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1MainComponent } from './day1-main.component';

describe('Day1MainComponent', () => {
  let component: Day1MainComponent;
  let fixture: ComponentFixture<Day1MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day1MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
