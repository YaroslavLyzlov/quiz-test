import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Answer } from '../models';
import { QuizStorageService } from '../services/quiz-storage.service';
import { QuizTask } from '../models';
import { ActivatedRoute, Router } from '@angular/router';
import { Carousel } from 'app/modules/shared/carousel';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz-main',
  templateUrl: './quiz-main.component.html',
  styleUrls: ['./quiz-main.component.css']
})
export class QuizMainComponent implements OnInit, OnDestroy {
  taskPaginator: Carousel<QuizTask> = null;
  isRequest: boolean = false;
  private currentTaskId: string = null;

  private activatedRouteSub: Subscription;

  constructor(private quizMainService: QuizStorageService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRouteSub = this.activatedRoute.data.subscribe(
      data => {
        const quizState = data.quizState;
        this.currentTaskId = quizState.currentTaskId || quizState.list[0].task.id;
        const index = quizState.list.findIndex(
          taskItem => taskItem.task.id === this.currentTaskId
        );
        this.taskPaginator =
          new Carousel<QuizTask>(quizState.list, index, this.onAfterChangeItem.bind(this), this.onBeforeChangeItem.bind(this));
      }
    );
  }

  onBeforeChangeItem(item: QuizTask): void {
    if (!item) {
      return;
    }
    item.answer.stopTimer();
  }

  onAfterChangeItem(item: QuizTask): void {
    if (!item) {
      return;
    }
    this.currentTaskId = item.task.id;
    item.answer.startTimer();
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
    console.log(taskId);
    const quizTaskIndex = this.taskPaginator.list.findIndex(
      quizTaskItem => quizTaskItem.task.id === taskId
    );
    console.log(quizTaskIndex);
    const removed = this.taskPaginator.removeByIndex(quizTaskIndex);
    if (removed && this.taskPaginator.list.length === 0) {
      this.router.navigate(['quiz', 'result']);
    }
  }

  /**
   * @description Перед тем, как перезагрузить вкладку, сохраняем состояние опросника
   * Конечно, есть вариант, когда у пользователя пропал интернет или выключился компьютер,
   * но здесь уже стоит решить при конкретной бизнес-задаче, важно ли для нас это
   * или можно пренебречь этим
   */
  @HostListener('window:beforeunload')
  onReloadPage(): void {
    this.quizMainService.saveCurrentTaskId(this.currentTaskId);
    this.taskPaginator.list.forEach(
      listItem => this.quizMainService.saveAnswer(listItem.answer.toServer(), true)
    );
  }

  ngOnDestroy(): void {
    this.activatedRouteSub.unsubscribe();
  }
}
