import { Module } from "../core/module";
import { random } from "../utils.js";

export class ClicksModule extends Module {
  #clickCount;

  constructor(type, text) {
    super("click", "Считать клики");
    this.#clickCount = 0;
  }

  #countClicks() {
    this.#clickCount++;
  }

  trigger() {
    const clickTime = random(5000, 10000);

    this.#clickCount = 0;

    alert(
      `После нажатия на ОК будет подсчет кликов в любом месте экрана за время ${Math.round(
        clickTime / 1000
      )} секунд`
    );

    let addCallbackFunc = this.#countClicks.bind(this);

    setTimeout(() => {
      alert(`Количество кликов равно ${this.#clickCount}`);

      document.removeEventListener("click", addCallbackFunc);
    }, clickTime);

    document.addEventListener("click", addCallbackFunc);
  }
}
