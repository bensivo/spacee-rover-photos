import { Module, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { NasaModule } from './nasa/nasa.module';
import { PhotoModule } from './photo/photo.module';
import axios from 'axios';

@Module({
  imports: [
    ConfigModule,
    NasaModule,
    PhotoModule,
  ],
})
export class AppModule implements OnModuleInit{
  onModuleInit() {
    this.setupAxiosLoggers();
  }

  /**
   * Create interceptors on the default axios instance, letting us see all
   * requests that are made from our application.
   */
  private setupAxiosLoggers() {
    const axiosLogger = new Logger('Axios')

    axios.interceptors.request.use(req => {
      axiosLogger.debug(`REQ - ${req.method} ${req.url}`)
      return req;
    });

    axios.interceptors.response.use(res => {
      axiosLogger.debug(`RES - ${res.config.method} ${res.config.url} - ${res.status}`)
      return res;
    });
  }
}
