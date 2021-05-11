import { Module } from '@nestjs/common';
import SquirrelEvents from "./events/squirrel.events";
import {app, BrowserWindow} from "electron";
import App from "./app";
import ElectronEvents from "./events/electron.events";

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class ElectronModule {
  initialize() {
    if (SquirrelEvents.handleEvents()) {
      // squirrel event handled (except first run event) and app will exit in 1000ms, so don't do anything else
      app.quit();
    }
  }

  bootstrapApp() {
    App.main(app, BrowserWindow);
  }

  bootstrapAppEvents() {
    ElectronEvents.bootstrapElectronEvents();

    // initialize auto updater service
    if (!App.isDevelopmentMode()) {
      // UpdateEvents.initAutoUpdateService();
    }
  }

  constructor() {
    // handle setup events as quickly as possible
    this.initialize();

    // bootstrap app
    this.bootstrapApp();
    this.bootstrapAppEvents();
  }

}
