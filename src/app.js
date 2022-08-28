import "./styles.css";
import { ContextMenu } from "./menu.js";
import { TestModule } from "./modules/test.module.js";
import { ClicksModule } from "./modules/clicks.module.js";

const contextMenu = new ContextMenu(".menu");

const clickModule = new ClicksModule("click", "Считать клики");
const testModule1 = new TestModule("test", "test module 1");
const testModule2 = new TestModule("test", "test module 2");
const testModule3 = new TestModule("test", "test module with very big text");
const testModule4 = new TestModule(
  "test",
  "test module with huge length text for extended test for big height"
);

contextMenu.add(clickModule);
contextMenu.add(testModule1);
contextMenu.add(testModule2);
contextMenu.add(testModule3);
contextMenu.add(testModule4);
