import { Module } from '@nestjs/common';
import { PhotoController } from './photo.controller';
import { NasaModule } from '../nasa/nasa.module';
import { CacheModule } from '../cache/cache.module';
import { PhotoService } from './photo.service';

@Module({
    imports: [NasaModule, CacheModule],
    controllers: [PhotoController],
    providers: [PhotoService],
})
export class PhotoModule {}
