import { Module } from "../core/module";

export class ClicksModule extends Module {
  constructor() {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const clickTime = getRandomIntInclusive(5000, 10000);
    let clickCount = 0;

    alert(
      `После нажатия на ОК будет подсчет кликов в любом месте экрана за время ${Math.round(
        clickTime / 1000
      )} секунд`
    );
    setTimeout(() => {
      alert(`Количество кликов равно ${clickCount}`);
      clickCount = 0;
      document.removeEventListener("click", countClicks);
    }, clickTime);

    document.addEventListener("click", countClicks);

    function countClicks() {
      clickCount++;
      console.log("click");
    }
  }
}
