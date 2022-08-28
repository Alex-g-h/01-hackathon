import { Module } from "../core/module";
import { random } from "../utils.js";

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  #clickCount;

  #countClicks() {
    clickCount++;
  }

  trigger() {
    const clickTime = new random(5000, 10000);
    this.#clickCount = 0;

    alert(
      `После нажатия на ОК будет подсчет кликов в любом месте экрана за время ${Math.round(
        clickTime / 1000
      )} секунд`
    );

    setTimeout(() => {
      alert(`Количество кликов равно ${this.#clickCount}`);
      document.removeEventListener("click", this.#countClicks);
    }, clickTime);

    document.addEventListener("click", this.#countClicks);
  }
}
