import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewQuizComponent } from './component/quiz-create-new/create-new-quiz.component';
import { QuizResultsComponent } from './component/quiz-results/quiz-results.component';

const routes: Routes = [
  { path: '', component: CreateNewQuizComponent },
  { path: 'results', component: QuizResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
