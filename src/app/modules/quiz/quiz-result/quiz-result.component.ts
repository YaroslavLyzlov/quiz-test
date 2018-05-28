import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizResult } from '../models';
import { QuizStorageService } from '../services/quiz-storage.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {
  result: QuizResult;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private quizStorageService: QuizStorageService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      data => {
        this.result = data.quizResult;
      }
    );
  }

  tryAgainQuiz(): void {
    this.quizStorageService.tryAgainQuiz().subscribe(
      () => this.router.navigate(['quiz', 'question'])
    );
  }
}
