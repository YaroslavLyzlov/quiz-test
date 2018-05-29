import { QuizStorageService } from './quiz-storage.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { QuizTask } from '../models';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { map } from 'rxjs/operators';
@Injectable()
export class QuizTaskListResolver implements Resolve<any> {
  constructor(private quizMainService: QuizStorageService,
              private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Array<QuizTask>> {

    return forkJoin([this.quizMainService.getQuizTaskList(), this.quizMainService.getTaskId()])
      .pipe(
        map(data => {
          return {
            list: data[0],
            currentTaskId: data[1]
          };
        }),
        catchError(
          error => {
            console.error(error);
            /**
             * Ловим (ну, условно ловим :)) ошибку, что тест уже пройден, и надо показать результаты
             */
            this.router.navigate(['quiz', 'result']);
            return of(error);
          }
        )
      );
  }
}
