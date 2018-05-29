import { Injectable } from '@angular/core';
import { QuizApiRepository } from '../quiz-api.repository';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';

@Injectable()
export class GetTaskListCase {

  constructor(private repository: QuizApiRepository) {}

  execute(): Observable<Array<Task>> {
    return this.repository.getTaskList();
  }
}
