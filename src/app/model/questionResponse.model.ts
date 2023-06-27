import { Question } from './question.model';

export interface QuestionResponse {
  response_code: number;
  results: Question[];
}
