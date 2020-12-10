import { Module } from '@nestjs/common';
import { NasaClient } from './nasa.client';
import { ConfigModule } from '../config/config.module';

@Module({
    imports: [ConfigModule],
    providers: [NasaClient],
    exports: [NasaClient],
})
export class NasaModule {}
