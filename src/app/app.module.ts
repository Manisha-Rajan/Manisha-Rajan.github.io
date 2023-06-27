import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNewQuizComponent } from './component/quiz-create-new/create-new-quiz.component';
import { QuizMakerService } from './quiz-maker-service/quiz-maker.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QuizQuestionsViewComponent } from './component/quiz-create-new/quiz-questions-view/quiz-questions-view.component';
import { QuizResultsComponent } from './component/quiz-results/quiz-results.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewQuizComponent,
    QuizQuestionsViewComponent,
    QuizResultsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [QuizMakerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
