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

    const addCallbackFunc = this.#countClicks.bind(this);

    // prevent taking into account click on "OK" button
    setTimeout(() => document.addEventListener("click", addCallbackFunc), 0);

    setTimeout(() => {
      alert(`Количество кликов равно ${this.#clickCount}`);

      document.removeEventListener("click", addCallbackFunc);
    }, clickTime);
  }
}
