import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizMainComponent } from './quiz-main/quiz-main.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { QuizApiModule } from './quiz-api/quiz-api.module';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { QuizStorageService } from './services/quiz-data-handle.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    QuizRoutingModule,
    QuizApiModule
  ],
  declarations: [ QuizQuestionComponent, QuizMainComponent, QuizResultComponent ],
  providers: [ QuizStorageService ]
})
export class QuizModule { }
