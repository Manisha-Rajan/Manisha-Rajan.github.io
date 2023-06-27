import { QuizMakerService } from './../../../quiz-maker-service/quiz-maker.service';
import { Question } from './../../../model/question.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'quiz-questions-view',
  templateUrl: './quiz-questions-view.component.html',
  styleUrls: ['./quiz-questions-view.component.css'],
})
export class QuizQuestionsViewComponent implements OnInit {
  /* data to be displayed */
  @Input() questionList: Question[] = [];
  @Input() optionsList: Array<Array<string>> = [];
  selectedOption: string[] = [];
  length: number = 0;

  constructor(private service: QuizMakerService, private router: Router) {}

  ngOnInit(): void {}

  /* increase count so that submit button can be enabled and save the selected option on change */
  onOptionSelect(index: number, option: string): void {
    if (
      this.selectedOption[index] == undefined ||
      this.selectedOption[index] == null ||
      this.selectedOption[index] == ''
    )
      this.length = this.length + 1;
    this.selectedOption[index] = option;
  }

  /* On clicking submit redirect to the result page */
  onSubmit(): void {
    this.service.chosenOption = this.selectedOption;
    this.router.navigateByUrl('/results');
  }
}
