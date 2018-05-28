import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { QuizStorageService } from './quiz-storage.service';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class QuizResultResolver implements Resolve<any> {
  constructor(private quizMainService: QuizStorageService,
              private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.quizMainService.getQuizResult()
      .pipe(catchError(
      error => {
        /**
         * Не даем переходить в результат, если по какой-то причине
         * не смогли получить результат (например, пользователь еще не прошел тест до конца)
         * В данном случае не обрабатываю конкретные ошибки, просто перекидываю в quiz
         * В случае более сложной обработки возможны варианты (перекидывать на страницу ошибки, например)
         */
        this.router.navigate(['quiz', 'question']);
        return of(error);
      }
    ));
  }
}
