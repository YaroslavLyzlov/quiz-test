import { Injectable } from '@angular/core';
import { QuizApiRepository } from '../quiz-api.repository';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';
import { Answer } from '../../models';

/**
 * @description Case - слой преобразования данных из чистой модели
 * из хранилищя, в более подготовленные данные для бизнес логики
 * и именно с ним мы работаем в контроллере компонента,
 * служит для простых преобразований, например, в случае плохо
 * спроектированного API или работы с внешним API, на которое повлиять
 * не представляется возможным. Когда преобразование не требуется - отдаем, как есть.
 * НО, важное замечание, это один из примеров, как можно работать с сервером и данными, конечное
 * решение принимаю обычно в обсуждении с командой и проектом. В принципе подход
 * repository -> serivce (а не как здесь, repository -> case -> service) тоже имеет право на жизнь
 * @example Пример преобразования: ResponseModel { isConnectService1: boolean, isConnectService2 }
 *  И нам интересен только подключен ли он к 1-ому сервису, тогда мы вернем не Observable<ResponseModel>,
 *  а Observable<boolean>
 */
@Injectable()
export class SaveAnswerCase {

  constructor(private repository: QuizApiRepository) {}

  execute(answer: Answer, isDirty: boolean = false): Observable<void> {
    return this.repository.saveAnswer(answer, isDirty);
  }
}
