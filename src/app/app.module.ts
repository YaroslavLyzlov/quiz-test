import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { QuizModule } from './modules/quiz';
import { ErrorPagesModule } from './modules/error-pages';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuizModule,
    ErrorPagesModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
