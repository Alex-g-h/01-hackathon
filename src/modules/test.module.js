import { Module } from "../core/module.js";

export class TestModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    console.log(`${this.type} module triggered: ${this.text}`);
  }
}