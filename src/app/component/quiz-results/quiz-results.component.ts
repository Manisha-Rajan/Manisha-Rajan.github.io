import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question.model';
import { QuizMakerService } from 'src/app/quiz-maker-service/quiz-maker.service';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css'],
})
export class QuizResultsComponent implements OnInit {
  questionList: Question[] = [];
  optionList: Array<Array<String>> = [];
  choosenOption: String[] = [];
  count: number = 0;
  backgroundColour: string = '';
  constructor(private service: QuizMakerService) {}

  ngOnInit(): void {
    this.questionList = this.service.questionList;
    this.optionList = this.service.OptionList;
    this.choosenOption = this.service.chosenOption;
    this.backgroundColour = this.Score();
  }

  choosenAnswer(option: String, i: number) {
    let choosenOption = this.choosenOption[i];
    if (option === choosenOption) {
      return true;
    } else {
      return false;
    }
  }
  correctAnswers(option: String, i: number) {
    let correctAnswer = this.questionList[i].correct_answer;
    if (correctAnswer == option) {
      return true;
    } else {
      return false;
    }
  }
  Score() {
    this.count = 0;
    for (let i = 0; i < 5; i++) {
      let correctAnswer = this.questionList[i].correct_answer;
      if (this.choosenOption[i] === correctAnswer) {
        this.count++;
      }
    }
    if (this.count > 3) return 'green';
    else if (this.count <= 1) return 'red';
    else return 'yellow';
  }
}
