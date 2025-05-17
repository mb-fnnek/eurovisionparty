import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsIndividualComponent } from './results-individual.component';

describe('ResultsIndividualComponent', () => {
  let component: ResultsIndividualComponent;
  let fixture: ComponentFixture<ResultsIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsIndividualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
