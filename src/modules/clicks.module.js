import { Module } from "../core/module";
import { random } from "../utils.js";

export class ClicksModule extends Module {
  #clickCount;

  constructor(type, text) {
    super("click", "Считать клики");
    this.#clickCount = 0;
  }

  #countClicks() {
    this.#clickCount += 1;
  }

  trigger() {
    const clickTime = random(5000, 10000);

    alert(
      `После нажатия на ОК будет подсчет кликов в любом месте экрана за время ${Math.round(
        clickTime / 1000
      )} секунд`
    );

    setTimeout(() => {
      alert(`Количество кликов равно ${this.#clickCount}`);
      document.removeEventListener("click", document);
    }, clickTime);

    document.addEventListener("click", () => {
      this.#countClicks();
    });
  }
}
