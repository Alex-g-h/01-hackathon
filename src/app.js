import "./styles.css";
import { ContextMenu } from "./menu.js";
import { TestModule } from "./modules/test.module.js";
import { ClicksModule } from "./modules/clicks.module.js";
import { BackgroundModule } from './modules/background.module';
import {ShapeModule} from './modules/shape.module'
import { TimerModule } from './modules/timer.module.js';

const contextMenu = new ContextMenu(".menu");

const clickModule = new ClicksModule("click", "Считать клики");
const testModule1 = new TestModule("test", "test module 1");
const shapeModule = new ShapeModule();
const backgroundModule = new BackgroundModule();
const timerModule = new TimerModule();
const testModule4 = new TestModule(
  "test",
  "test module with huge length text for extended test for big height"
);

contextMenu.add(clickModule);
contextMenu.add(shapeModule);
contextMenu.add(backgroundModule);
contextMenu.add(timerModule);
