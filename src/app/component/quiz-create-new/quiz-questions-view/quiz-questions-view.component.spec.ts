import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionsViewComponent } from './quiz-questions-view.component';

describe('QuizQuestionsViewComponent', () => {
  let component: QuizQuestionsViewComponent;
  let fixture: ComponentFixture<QuizQuestionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizQuestionsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizQuestionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
