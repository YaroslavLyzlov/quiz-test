import { Injectable } from '@angular/core';
import { QuizApiRepository } from '../quiz-api.repository';
import { Observable } from 'rxjs';
import { Answer } from '../../models';


@Injectable()
export class GetAnswerListCase {

  constructor(private repository: QuizApiRepository) {}

  execute(): Observable<Array<Answer>> {
    return this.repository.getAnswerList();
  }
}
