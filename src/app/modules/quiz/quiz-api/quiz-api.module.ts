import { NgModule } from '@angular/core';
import { QuizApiRepository } from './quiz-api.repository';
import { GetAnswerListCase, GetCurrentTaskIdCase, GetTaskListCase, SaveAnswerCase, SaveCurrentTaskIdCase, TryAgainQuizCase } from './case';
@NgModule({
  providers: [
    QuizApiRepository,
    GetTaskListCase,
    GetAnswerListCase,
    SaveAnswerCase,
    SaveCurrentTaskIdCase,
    GetCurrentTaskIdCase,
    TryAgainQuizCase
  ]
})
export class QuizApiModule { }
