import {
    Inject,
    Injectable,
    Logger,
    OnApplicationBootstrap,
} from '@nestjs/common';
import * as fs from 'fs';
import * as os from 'os';
import { CacheService } from '../cache/cache-service.interface';
import { MarsRoverPhoto } from '../nasa/interface/mars-rover-photo.interface';
import { NasaClient } from '../nasa/nasa.client';

@Injectable()
export class PhotoService implements OnApplicationBootstrap {
    private readonly logger = new Logger(PhotoService.name);

    constructor(
        private nasaClient: NasaClient,
        @Inject('CACHE') private cache: CacheService,
    ) {}

    async onApplicationBootstrap() {
        const dates = fs.readFileSync('./dates.txt').toString().split(os.EOL);
        for (const dateStr of dates) {
            const date = new Date(Date.parse(dateStr));
            const [year, month, day] = [
                date.getFullYear(),
                date.getMonth(),
                date.getDay(),
            ];

            const cacheKey = `${year}-${month}-${day}`;
            const photos = await this.nasaClient.getMarsRoverPhotosForDate(
                year,
                month,
                day,
            );
            await this.cache.set(cacheKey, photos);
        }
    }

    public async getMarsRoverPhotos(
        year: number,
        month: number,
        day: number,
    ): Promise<MarsRoverPhoto[]> {
        const cacheKey = `${year}-${month}-${day}`;
        const cachedPhotos = await this.cache.get<MarsRoverPhoto[]>(cacheKey);
        if (!!cachedPhotos) {
            return cachedPhotos;
        }

        // TODO: Caching with some storage mechanism
        const photos = await this.nasaClient.getMarsRoverPhotosForDate(
            year,
            month,
            day,
        );
        await this.cache.set(cacheKey, photos).catch((err) => {
            this.logger.error(err);
        });

        return photos;
    }
}
