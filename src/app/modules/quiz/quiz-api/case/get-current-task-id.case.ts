import { Injectable } from '@angular/core';
import { QuizApiRepository } from '../quiz-api.repository';
import { Observable } from 'rxjs';

@Injectable()
export class GetCurrentTaskIdCase {

  constructor(private repository: QuizApiRepository) {}

  execute(): Observable<string> {
    return this.repository.getCurrentTaskId();
  }
}
