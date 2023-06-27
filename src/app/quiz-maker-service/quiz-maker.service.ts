import { QuestionResponse } from './../model/questionResponse.model';
import { Question } from './../model/question.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { TriviaCategoryResponse } from '../model/triviaCategoryResponse.model';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root',
})
export class QuizMakerService {
  private categoryURL: string = 'https://opentdb.com/api_category.php';
  private questionURL: string = 'https://opentdb.com/api.php';

  public questionList: Question[] = [];
  public OptionList: Array<Array<string>> = [];
  public chosenOption: string[] = [];

  constructor(private http: HttpClient) {}

  public getCategory(): Observable<TriviaCategoryResponse> {
    return this.http.get<TriviaCategoryResponse>(this.categoryURL);
  }

  public getQuestions(
    amount: number,
    category: Category,
    difficulty: string,
    type: string
  ): Observable<QuestionResponse> {
    let url =
      this.questionURL +
      '?amount=' +
      amount +
      '&category=' +
      category.id +
      '&difficulty=' +
      difficulty.toLowerCase() +
      '&type=' +
      type;
    console.log(url);
    return this.http.get<QuestionResponse>(url);
  }
}
