import { Module } from "../core/module.js";

export class TimerModule extends Module {
  #timeRemain // value with remain time until timer pass, [seconds]
  #intervalId
  #elem

  static #TIME_DEFAULT = 10;

  constructor() {
    super('timer', 'Таймер отсчета');
    this.#timeRemain = 0;
    this.#intervalId = 0;
    this.#elem = document.createElement('div');
    this.#elem.className = 'timer';
    document.body.append(this.#elem);
  }

  trigger() {
    const timeStr = prompt('Введите количство секунд для таймера', String(TimerModule.#TIME_DEFAULT));
    
    // check input's correctness 
    let isInputCorrect = true;
    timeStr ?? (isInputCorrect &&= false);
    let timeInt = Number(timeStr);
    isInputCorrect &&= !(Number.isNaN(timeInt));
    isInputCorrect &&= Number.isInteger(timeInt);
    if (!isInputCorrect)
      timeInt = TimerModule.#TIME_DEFAULT; // use default value

    this.#timeRemain = timeInt;
    this.#elem.style.display = 'flex'; // show element
    this.#intervalId = setInterval(this.#timerValueDecrement.bind(this), 1000);
  }

  #timerValueDecrement(event) {
    if (this.#timeRemain <= 0) {
      clearInterval(this.#intervalId);
      this.#elem.style.display = 'none'; // hide element
    } 
    
    this.#elem.textContent = String(this.#timeRemain--);
  } 
}