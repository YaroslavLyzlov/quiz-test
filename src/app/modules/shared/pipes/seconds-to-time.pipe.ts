import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToTime'
})
export class SecondsToTimePipe implements PipeTransform {
  transform(value: number): string {
    const hours   = Math.floor(value / 3600);
    const minutes = Math.floor((value - (hours * 3600)) / 60);
    const seconds = value - (hours * 3600) - (minutes * 60);

    let result = '';
    if (hours < 10) {
      result += `0${hours}:`;
    } else {
      result += `${hours}:`;
    }
    if (minutes < 10) {
      result += `0${minutes}:`;
    } else {
      result += `${minutes}:`;
    }
    if (seconds < 10) {
      result += `0${seconds}`;
    } else {
      result += seconds;
    }
    return result;
  }
}
