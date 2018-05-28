import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizResult } from '../models';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {
  result: QuizResult;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      data => {
        this.result = data.quizResult;
      }
    );
  }

  tryAgainQuiz(): void {
    /**
     * @description Тут вместо clear запрос на бэк какой-то, конечно :)
     */
    localStorage.clear();
    this.router.navigate(['quiz', 'question']);
  }
}
