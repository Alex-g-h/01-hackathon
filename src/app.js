import "./styles.css";
import { ContextMenu } from "./menu.js";
import { ClicksModule } from "./modules/clicks.module.js";
import { BackgroundModule } from './modules/background.module';
import { ShapeModule } from './modules/shape.module'
import { TimerModule } from './modules/timer.module.js';

const contextMenu = new ContextMenu(".menu");

const clickModule = new ClicksModule();
const shapeModule = new ShapeModule();
const backgroundModule = new BackgroundModule();
const timerModule = new TimerModule();

contextMenu.add(clickModule);
contextMenu.add(shapeModule);
contextMenu.add(backgroundModule);
contextMenu.add(timerModule);
