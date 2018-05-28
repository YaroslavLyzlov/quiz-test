import { TaskResponseModel } from '../quiz-api/case/models/task-response.model';
import { Answer } from './answer';

export class Quiz {
  constructor(public taskList: Array<TaskResponseModel>,
              public answerList: Array<Answer> = []) {
  }
}
