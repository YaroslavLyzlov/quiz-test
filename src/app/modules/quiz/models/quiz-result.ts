import { QuizTask } from './quiz-task';

export class QuizResult {
  constructor(public quizResultList: Array<QuizTask>,
              public resultTime: number) {}
}
