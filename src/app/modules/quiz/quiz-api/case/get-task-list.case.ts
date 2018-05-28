import { Injectable } from '@angular/core';
import { QuizApiRepository } from '../quiz-api.repository';
import { Observable } from 'rxjs';
import { TaskResponseModel } from './models/task-response.model';

/**
 * @description Case - слой преобразования данных из чистой модели
 * из хранилищя, в более подготовленные данные для бизнес логики
 * и именно с ним мы работаем в контроллере компонента,
 * служит для простых преобразований, например, в случае плохо
 * спроектированного API или работы с внешним API, на которое повлиять
 * не представляется возможным. Когда преобразование не требуется - отдаем, как есть.
 *
 * @example Пример преобразования: ResponseModel { isConnectService1: boolean, isConnectService2 }
 *  И нам интересен только подключен ли он к 1-ому сервису, тогда мы вернем не Observable<ResponseModel>,
 *  а Observable<boolean>
 */
@Injectable()
export class GetTaskListCase {

  constructor(private repository: QuizApiRepository) {}

  execute(): Observable<Array<TaskResponseModel>> {
    return this.repository.getTaskList();
  }
}
