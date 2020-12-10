import { Module } from "@nestjs/common";
import { ConfigModule } from "src/config/config.module";
import { ConfigService } from "src/config/config.service";
import { InMemoryCache } from "./impl/in-memory-cache.service";

@Module({
    imports: [ConfigModule],
    providers: [
        {
            provide: 'CACHE',
            // useClass: InMemoryCache,
            inject: [ConfigService],
            useFactory: (configService: ConfigService)  => {
                switch(configService.CACHE_MECHANISM) {
                    case 'in-memory':
                        console.log('Using inmemory cache');
                        return new InMemoryCache();
                    default:
                        throw new Error(`Cache mechanism ${configService.CACHE_MECHANISM} not supported`);
                }
            }
        }
    ],
    exports: [
        'CACHE'
    ]
})
export class CacheModule { }