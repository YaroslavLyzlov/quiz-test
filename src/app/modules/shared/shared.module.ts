import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from './app-button/app-button.component';
import { AppInputComponent } from './app-input/app-input.component';
import { SecondsToTimePipe } from './pipes/seconds-to-time.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ AppButtonComponent, AppInputComponent, SecondsToTimePipe ],
  exports: [ AppButtonComponent, AppInputComponent, SecondsToTimePipe ]
})
export class SharedModule { }
