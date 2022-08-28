import { Module } from './core/module.js';
import {Menu} from './core/menu'
import { getContextMenuLeftPosition, getContextMenuTopPosition } from './utils.js';
import { BackgroundModule } from './modules/background.module';

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);

    window.addEventListener('contextmenu', event => {
      event.preventDefault();

      // prevent menu overlap outside the screen
      const left = getContextMenuLeftPosition(event.x, this.el.parentNode.offsetWidth, this.el.offsetWidth);
      const top = getContextMenuTopPosition(event.y, this.el.parentNode.offsetHeight, this.el.offsetHeight);

      this.el.style.left = left + 'px';
      this.el.style.top = top + 'px';
      this.open();
    });
  }

  open() {
    // prevent open empty context menu
    if (this.el.querySelectorAll('.menu-item').length <= 0)
      return;

    this.el.style.display = 'flex';
    this.el.style.flexDirection = 'column';
  }

  close() {
    this.el.style.display = 'none';
  }

  add(module) {
    if (!(module instanceof Module)) {
      console.error('Cannot add not a Module instance to the context menu');
      return;
    }

    const liHTML = document.createElement('li');
    liHTML.className = 'menu-item';
    liHTML.textContent = module.text;
    liHTML.addEventListener('click', (event) => {
      this.close();
      module.trigger();
    });

    this.el.append(liHTML);
  }  
}