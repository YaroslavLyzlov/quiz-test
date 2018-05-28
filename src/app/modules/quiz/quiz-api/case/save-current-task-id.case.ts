import { Injectable } from '@angular/core';
import { QuizApiRepository } from '../quiz-api.repository';
import { Observable } from 'rxjs';

@Injectable()
export class SaveCurrentTaskIdCase {

  constructor(private repository: QuizApiRepository) {}

  execute(taskId: string): Observable<void> {
    return this.repository.saveCurrentTaskId(taskId);
  }
}
