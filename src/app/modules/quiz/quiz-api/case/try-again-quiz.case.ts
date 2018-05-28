import { Injectable } from '@angular/core';
import { QuizApiRepository } from '../quiz-api.repository';
import { Observable } from 'rxjs';

@Injectable()
export class TryAgainQuizCase {

  constructor(private repository: QuizApiRepository) {}

  execute(): Observable<void> {
    return this.repository.tryAgainQuiz();
  }
}
