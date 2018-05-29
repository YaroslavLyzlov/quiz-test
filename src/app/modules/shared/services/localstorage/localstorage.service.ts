import { Injectable } from '@angular/core';

/**
 * @description Накидал простенький сервис, так как адекватный побыстрому не нашел для последнего angular,
 * экспериментировать не стал и тут тоже не стал много писать и сделал по-простому
 */
@Injectable()
export class LocalStorageService {
  prefix: string = 'quiz_app:';
  setItem(key: string, value: any): void {
    localStorage.setItem(`${this.prefix}${key}`, value);
  }

  getItem<T>(key: string, mapper?: (value: any) => T): T {
    let value = null;
    try {
      value = JSON.parse(localStorage.getItem(`${this.prefix}${key}`));
    } catch (e) {
      console.error('JSON parse error', e);
    }
    return mapper && mapper(value) || value;
  }

  clear(): void {
    localStorage.clear();
  }
}
