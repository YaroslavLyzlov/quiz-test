import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Task } from '../models/task';
import { taskList } from './data/task-list';
import { Answer } from '../models';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { LocalStorageService } from '../../shared/services/localstorage';

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



@Injectable()
export class QuizApiRepository {
  private answerList: Array<Answer> = [];
  constructor(private localStorageService: LocalStorageService) {}

  tryAgainQuiz(): Observable<void> {
    this.answerList.length = 0;
    this.localStorageService.clear();
    return of(void 0).pipe(delay(1000));
  }
  /**
   * @description Имитируем через rxjs асинхронное общение с сервисом
   */
  getTaskList(): Observable<Array<Task>> {
    return of(taskList).pipe(delay(1000));
  }

  getAnswerList(): Observable<Array<Answer>> {
    this.answerList = this.localStorageService.getItem('answerList', (value: Array<Answer>) => {
      return (value || []);
    });
    // const answerList = db.answerList.map(answerItem => Answer.fromServer(answerItem));
    return of(this.answerList.map(Answer.fromServer)).pipe(delay(1000));
  }

  saveCurrentTaskId(taskId: string): Observable<void> {
    this.localStorageService.setItem('currentTaskId', taskId);
    return of(void 0).pipe(delay(1000));
  }

  getCurrentTaskId(): Observable<string> {
    /**
     * @description Так как это все-таки логика бэка, тут, в случае если currentTaskId
     * нет, должен возвращаться id первого из списка, не буду хардкодить и обработаю эту логику в компоненте
     */
    const currentTaskId = this.localStorageService.getItem<string>('currentTaskId', (value) => value && value.toString());
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
    if (!answer.text && !answer.time) {
      /**
       * тут по идеее вернем какую-то ошибку и в будущем обработаем
       */
      return throwError('Not valid task').pipe(delay(1000));
    }
    const savedAnswer = this.answerList.find(
      answerItem => answerItem.taskId === answer.taskId
    );

    if (!savedAnswer) {
      const answerToSave = Object.assign({}, answer, { isAnswered: !isDirty });
      this.answerList.push(answerToSave);
      console.log(this.answerList);
    } else {
      Object.assign(savedAnswer, { text: answer.text, time: answer.time, isAnswered: !isDirty });
    }

    this.localStorageService.setItem('answerList', JSON.stringify(this.answerList));
    return of(void 0).pipe(delay(1000));
  }
}
