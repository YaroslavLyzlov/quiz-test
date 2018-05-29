import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../models/task';
import { Answer, QuizResult, QuizTask } from '../models';
import {
  GetAnswerListCase, GetCurrentTaskIdCase, GetTaskListCase, SaveAnswerCase, SaveCurrentTaskIdCase,
  TryAgainQuizCase
} from '../quiz-api/case';



@Injectable()
export class QuizStorageService {
  constructor(private getTaskListCase: GetTaskListCase,
              private getAnswerListCase: GetAnswerListCase,
              private saveAnswerCase: SaveAnswerCase,
              private getCurrentTaskIdCase: GetCurrentTaskIdCase,
              private saveCurrentTaskIdCase: SaveCurrentTaskIdCase,
              private tryAgainQuizCase: TryAgainQuizCase) {
  }

  tryAgainQuiz(): Observable<void> {
    return this.tryAgainQuizCase.execute();
  }

  saveCurrentTaskId(taskId: string): Observable<void> {
    return this.saveCurrentTaskIdCase.execute(taskId);
  }

  getTaskId(): Observable<string> {
    return this.getCurrentTaskIdCase.execute();
  }

  saveAnswer(answer: Answer, isDirty: boolean = false): Observable<void> {
    return this.saveAnswerCase.execute(answer, isDirty);
  }

  getQuizTaskList(): Observable<Array<QuizTask>> {
    return forkJoin<Array<Task>, Array<Answer>>([this.getTaskListCase.execute(), this.getAnswerListCase.execute()])
      .pipe(map(data => this.handleTaskListWithAnswerList(data)));
  }

  getQuizResult(): Observable<QuizResult> {
    return forkJoin<Array<Task>, Array<Answer>>([this.getTaskListCase.execute(), this.getAnswerListCase.execute()])
      .pipe(map(data => this.handleQuizTaskResult(data)));
  }

  private handleQuizTaskResult(data: [Array<Task>, Array<Answer>]): QuizResult {
    const taskList = data[0];
    const answerList = data[1];
    if (taskList.length !== answerList.length) {
      throw new Error('Not all questions with answers');
    }
    const quizTaskList = taskList.map(taskItem => {
      const answer = answerList.find(
        answerItem => taskItem.id === answerItem.taskId
      );
      return new QuizTask(taskItem, answer);
    }).sort(
      (a, b) => +a.task.id - +b.task.id
    );

    const resultTime = answerList.reduce((prev, curr) => {
      prev += curr.time;
      return prev;
    }, 0);

    return new QuizResult(
      quizTaskList,
      resultTime
    );
  }

  /**
   * @description Предполагая, что у нас база данных нормализована
   * и хранит модель вопрос и ответов отдельно, приводим для нас в чуть более удобный вид
   * по идее этим должен заниматься бэк для фронта
   */
  private handleTaskListWithAnswerList(data: [Array<Task>, Array<Answer>]): Array<QuizTask> {
    const taskList = data[0];
    const answerList = data[1];
    const taskWithoutAnswer = taskList.filter(
      task => {
        return !answerList.some(answerItem => task.id === answerItem.taskId);
      }
    );

    const answerResultList = data[1].filter(
      answer => !answer.isAnswered
    ).concat(
      taskWithoutAnswer.map(
        taskItem => new Answer(taskItem.id)
      )
    );
    if (answerResultList.length === 0) {
      throw new Error('All question is answered');
    }
    return answerResultList.map(
      answer => {
        const task = taskList.find(
          taskItem => taskItem.id === answer.taskId
        );
        return new QuizTask(task, answer);
      }
    ).sort(
      (a, b) => +a.task.id - +b.task.id
    );
  }
}
