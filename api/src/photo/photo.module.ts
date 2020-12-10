import { Module } from "@nestjs/common";
import { PhotoController } from "./photo.controller";
import { NasaModule } from "src/nasa/nasa.module";
import { CacheModule } from "src/cache/cache.module";
import { PhotoService } from "./photo.service";

@Module({
    imports: [NasaModule, CacheModule],
    controllers: [PhotoController],
    providers: [PhotoService]
})
export class PhotoModule { }