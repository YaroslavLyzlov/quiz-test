export class Answer {
  get text(): string {
    return this._text;
  }
  get time(): number {
    return this._time;
  }
  get isAnswered(): boolean {
    return this._isAnswered;
  }
  private _timer: number;
  /**
   * @description Аналогично методу fromServer
   */
  static fromServer(model: any): Answer {
    return new Answer(model.taskId, model.text, model.time, model.isAnswered);
  }
  constructor(public taskId: string,
              private _text: string = '',
              private _time: number = 0,
              private _isAnswered: boolean = false) {}

  startTimer(): void {
    this._timer = window.setTimeout(
      () => {
        this._time++;
        this.startTimer();
      }, 1000);
  }

  stopTimer(): void {
    clearInterval(this._timer);
  }

  /**
   * @description Метод, чтобы присваивание было не явным и не менять модель извне
   */
  setAnswer(text: string): void {
    this._text = text;
  }

  /**
   * @description Здесь для таких вещей по-хорошему прикрутить какую-нибудь библиотеку
   * У нас используется и нами написана https://github.com/SoEasy/tserialize
   * В тестовом задании не стал прикручивать, чтобы время много не тратить
   * Модель, которую отправляем на сервер, не стал указывать, лучше бы указать, конечно, но впринципе тут как кому удобнее
   * и как команда договориться у себя
   */
  toServer(): any {
    return {
      text: this.text,
      time: this.time,
      isAnswered: this.isAnswered,
      taskId: this.taskId
    };
  }
}
