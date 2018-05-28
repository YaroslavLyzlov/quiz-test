import { RouterModule, Routes } from '@angular/router';
import { QuizMainComponent } from './quiz-main/quiz-main.component';
import { NgModule } from '@angular/core';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { QuizResultResolver, QuizTaskListResolver } from './services';

const quizRoutes: Routes = [
  { path: 'quiz/question',
    component: QuizMainComponent,
    resolve: {
      quizState: QuizTaskListResolver
    }
  },
  { path: 'quiz/result',
    component: QuizResultComponent,
    resolve: {
      quizResult: QuizResultResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(quizRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ QuizTaskListResolver, QuizResultResolver ]
})
export class QuizRoutingModule {}
