import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from './app-button/app-button.component';
import { SecondsToTimePipe } from './pipes';
import { LocalStorageService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ AppButtonComponent, SecondsToTimePipe ],
  exports: [ AppButtonComponent, SecondsToTimePipe ],
  providers: [ LocalStorageService ]
})
export class SharedModule { }
