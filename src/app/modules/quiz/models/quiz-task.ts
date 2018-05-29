import { Task } from './task';
import { Answer } from './answer';

export class QuizTask {
  constructor(public task: Task,
              public answer: Answer) {}
}
