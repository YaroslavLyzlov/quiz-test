import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Answer, QuizTask } from '../models';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html'
})
export class QuizQuestionComponent implements OnChanges {
  answerText: string = '';

  @Input() quizTaskIndex: number;
  @Input() quizTaskListLength: number;
  @Input() quizTask: QuizTask;
  @Output() onSendAnswer: EventEmitter<Answer> = new EventEmitter<Answer>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.quizTask && changes.quizTask.currentValue) {
        /**
         * Чтобы не менять модель answer неявно по ссылке через ngModel,
         * сохраняем ее у себя в компоненте и при ответе - сохраняем
         */
        this.answerText = changes.quizTask.currentValue.answer.text;
      }
  }

  onChangeAnswerText(): void {
    this.quizTask.answer.setAnswer(this.answerText);
  }

  sendAnswer(): void {
    this.quizTask.answer.stopTimer();
    this.onSendAnswer.emit(this.quizTask.answer);
  }
}
