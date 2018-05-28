import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskResponseModel } from './case/models/task-response.model';
import { taskList } from './data/task-list';
import { Answer } from '../models';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
/**
 * @description Данный класс - упрощенная модель класса работы с API
 * У нас в компании мы используем декораторы для удобной работы с данными сервера
 * по формату jsonrpc. Выглядит примерно так:
 * @JsonRpcPath(path, config)
 * class Repository {
 *  @JsonRpcRequest(methodName)
 *  getData(reqModel: ReqModel): Observable<ResponseModel>
 * }
 * Сущность Repository мы используем как низкоуровневый способ общения
 * с хранилищем (сервер, localStorage, indexedDb, etc...)
 * Он просто получает данные и отдает их дальше, без преобразований
 * Служит, чтобы легко можно было подменить источник данных и не менять верхние слои бизнес
 * логики. Repository создается не на весь проект один, их несколько на разные модули приложения
 * Но в нашем случае конкретно сейчас это отчасти и бэкэнд :)
 */
interface DB {
  answerList: Array<Answer>;
}
const db: DB = JSON.parse(localStorage.getItem('db')) || {
  answerList: []
};

@Injectable()
export class QuizApiRepository {
  tryAgainQuiz(): Observable<void> {
    db.answerList.length = 0;
    localStorage.clear();
    return of(void 0).pipe(delay(1000));
  }
  /**
   * @description Имитируем через rxjs асинхронное общение с сервисом
   */
  getTaskList(): Observable<Array<TaskResponseModel>> {
    return of(taskList).pipe(delay(1000));
  }

  getAnswerList(): Observable<Array<Answer>> {
    const answerList = db.answerList.map(answerItem => Answer.fromServer(answerItem));
    return of(answerList).pipe(delay(1000));
  }

  saveCurrentTaskId(taskId: string): Observable<void> {
    localStorage.setItem('currentTaskId', taskId);
    return of(void 0).pipe(delay(1000));
  }

  getCurrentTaskId(): Observable<string> {
    /**
     * @description Так как это все-таки логика бэка, тут, в случае если currentTaskId
     * нет, должен возвращаться id первого из списка, не буду хардкодить и обработаю эту логику в компоненте
     */
    const currentTaskId = localStorage.getItem('currentTaskId');
    return of(currentTaskId).pipe(delay(1000));
  }

  /**
   *
   * @description По идее вся логика должна быть на бэкенде,
   * но так как у нас его тут нет, делаем сами только по этой причине,
   * а не чтобы усложнить :) Флаг isDirty нужен по той же причине
   * Потому что ответили ли мы на вопрос - решает бэк и ставит флаг isAnswered
   * Но в нашем случае мы сами себе бэк и чтобы isAnswered не ставить в бизнес логике
   * фронта, делаем такой костылек (хотя все-равно он фактиески идет из бизнес логики, просто иллюзия, что нет :))
   */
  saveAnswer(answer: Answer, isDirty: boolean = false): Observable<void> {
    const savedAnswer = db.answerList.find(
      answerItem => answerItem.taskId === answer.taskId
    );

    if (!savedAnswer) {
      answer.isAnswered = !isDirty;

      db.answerList.push(answer);
      console.log(db.answerList);
    }

    if (savedAnswer) {
      if (!savedAnswer.isAnswered) {
        Object.assign(
          savedAnswer,
          {
            text: answer.text,
            time: answer.time,
            isAnswered: !isDirty
          }
        );
      } else {
        throw new Error('Already answered');
      }
    }

    localStorage.setItem('db', JSON.stringify(db));
    return of(void 0).pipe(delay(1000));
  }
}
