import { TaskResponseModel } from '../quiz-api/case/models/task-response.model';
import { Answer } from './answer';

export class QuizTask {
  constructor(public task: TaskResponseModel,
              public answer: Answer) {}
}
