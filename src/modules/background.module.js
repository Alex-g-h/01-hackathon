import { Module } from '../core/module'
import { getRandomColor } from '../utils'

export class BackgroundModule extends Module {
  constructor() {
    super ('background', 'Поменять цвет');
  }

  trigger() {
    document.body.style.background = getRandomColor();
  }
}