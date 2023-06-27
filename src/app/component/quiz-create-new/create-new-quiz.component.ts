import { Category } from '../../model/category.model';
import { Question } from '../../model/question.model';
import { QuizMakerService } from '../../quiz-maker-service/quiz-maker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-new-quiz',
  templateUrl: './create-new-quiz.component.html',
  styleUrls: ['./create-new-quiz.component.css'],
})
export class CreateNewQuizComponent implements OnInit {
  triviaCategories: Category[] = [];
  difficultyLevels: string[] = ['Easy', 'Medium', 'Hard'];
  selectedCategory: Category = {
    id: 0,
    name: '',
  };
  selectedDifficulty: string = '';
  questions: Question[] = [];
  showQuestion: boolean = false;
  options: Array<Array<string>> = [];

  constructor(private service: QuizMakerService) {}

  ngOnInit(): void {
    this.service.getCategory().subscribe((data) => {
      this.triviaCategories = data['trivia_categories'];
    });
  }

  createQuiz(): void {
    this.service
      .getQuestions(
        5,
        this.selectedCategory,
        this.selectedDifficulty,
        'multiple'
      )
      .subscribe((data) => {
        this.service.questionList = data.results;
        this.questions = data.results;
        this.showQuestion = true;
        this.getOption();
      });
  }

  getOption(): void {
    this.options = [];
    for (let i = 0; i < this.questions.length; i++) {
      let array: string[] = [this.questions[i].correct_answer];
      array = array.concat(this.questions[i].incorrect_answers);
      this.options.push(this.ShuffleOptions(array));
      this.service.OptionList = this.options;
    }
  }

  ShuffleOptions(array: string[]): string[] {
    let len = array.length,
      ind1,
      ind2;

    while (len) {
      ind1 = Math.floor(Math.random() * len--);
      ind2 = array[len];
      array[len] = array[ind1];
      array[ind1] = ind2;
    }

    return array;
  }
}
