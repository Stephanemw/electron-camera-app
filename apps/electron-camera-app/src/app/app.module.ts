import {Module} from '@nestjs/common';

import {AppService} from './app.service';
import {ElectronModule} from "./electron.module";

@Module({
  imports: [ElectronModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {
}
