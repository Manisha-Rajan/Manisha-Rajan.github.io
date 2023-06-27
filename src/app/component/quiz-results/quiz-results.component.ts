import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question.model';
import { QuizMakerService } from 'src/app/quiz-maker-service/quiz-maker.service';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css'],
})
export class QuizResultsComponent implements OnInit {
  /*Data to be displayed*/
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
    this.backgroundColour = this.score();
  }

  /*Method to check if the option displayed is the one selected by User*/
  choosenAnswer(option: String, i: number):boolean {
    let choosenOption = this.choosenOption[i];
    if (option === choosenOption) {
      return true;
    } else {
      return false;
    }
  }

  /* Method to see if the option getting displayed is the correct answer*/
  correctAnswers(option: String, i: number):boolean {
    let correctAnswer = this.questionList[i].correct_answer;
    if (correctAnswer == option) {
      return true;
    } else {
      return false;
    }
  }

  /*Method to count the score*/
  score():string {
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
