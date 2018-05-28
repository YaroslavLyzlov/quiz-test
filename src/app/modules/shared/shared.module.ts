import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from './app-button/app-button.component';
import { SecondsToTimePipe } from './pipes';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ AppButtonComponent, SecondsToTimePipe ],
  exports: [ AppButtonComponent, SecondsToTimePipe ]
})
export class SharedModule { }
