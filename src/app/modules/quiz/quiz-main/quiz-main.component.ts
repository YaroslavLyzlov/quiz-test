import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Answer } from '../models';
import { QuizStorageService } from '../services/quiz-data-handle.service';
import { QuizTask } from '../models';
import { ActivatedRoute, Router } from '@angular/router';
import { Carousel } from 'app/modules/shared/carousel';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-quiz-main',
  templateUrl: './quiz-main.component.html',
  styleUrls: ['./quiz-main.component.css']
})
export class QuizMainComponent implements OnInit {
  taskPaginator: Carousel<QuizTask> = null;
  isRequest: boolean = false;
  private currentTaskId: string = null;
  constructor(private quizMainService: QuizStorageService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.
    subscribe(
      data => {
        const quizState = data.quizState;
        this.currentTaskId = quizState.currentTaskId || quizState.list[0].task.id;
        console.log(this.currentTaskId);
        const index = quizState.list.findIndex(
          taskItem => taskItem.task.id === this.currentTaskId
        );
        this.taskPaginator = new Carousel<QuizTask>(quizState.list, index, this.onChangeItem.bind(this));
      }
    );
  }

  onChangeItem(item: QuizTask): void {
    this.currentTaskId = item.task.id;
  }

  onSendAnswer(answer: Answer): void {
    this.isRequest = true;
    this.quizMainService.saveAnswer(
      answer.toServer()
    ).pipe(finalize(() => {
      this.isRequest = false;
    }))
      .subscribe(
      () => {
        this.onSaveAnswer(answer.taskId);
      }
    );
  }

  private onSaveAnswer(taskId: string): void {
    const quizTaskIndex = this.taskPaginator.list.findIndex(
      quizTaskItem => quizTaskItem.task.id === taskId
    );

    const removed = this.taskPaginator.removeByIndex(quizTaskIndex);
    if (removed) {
      this.taskPaginator.selectNextAction(
        () => this.router.navigate(['quiz', 'result'])
      );
    }
  }
  /**
   * @description Перед тем, как перезагрузить вкладку, сохраняем состояние опросника
   * Конечно, есть вариант, когда у пользователя пропал интернет или выключился компьютер,
   * но здесь уже стоит решить при конкретной бизнес-задаче, важно ли для нас это
   * или можно пренебречь этим
   */
  @HostListener('window:beforeunload') onReloadPage(): void {
    /**
     * @description void 0, чтобы метод вызвался
     */
    this.quizMainService.saveCurrentTaskId(this.currentTaskId).subscribe(void 0);
    this.taskPaginator.list.forEach(
      listItem => this.quizMainService.saveAnswer(listItem.answer.toServer(), true).subscribe(void 0)
    );

    localStorage.setItem('currentTaskId', this.currentTaskId);
  }
}
