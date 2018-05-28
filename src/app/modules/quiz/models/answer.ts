export class Answer {
  _text: string;
  get text(): string {
    return this._text;
  }
  _time: number = 0;
  get time(): number {
    return this._time;
  }
  isAnswered: boolean = false;
  private _timer: number;
  /**
   * @description Аналогично методу fromServer
   */
  static fromServer(model: any): Answer {
    const answer =  new Answer(model.taskId);
    answer.setAnswer(model.text);
    answer.setTime(model.time);
    answer.isAnswered = model.isAnswered;
    return answer;
  }
  constructor(public taskId: string) {}

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

  setTime(time: number): void {
    this._time = time;
  }
  /**
   * @description Здесь для таких вещей по-хорошему прикрутить какую-нибудь библиотеку
   * У нас используется и нами написана https://github.com/SoEasy/tserialize
   * В тестовом задании не стал прикручивать, чтобы время много не тратить
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
