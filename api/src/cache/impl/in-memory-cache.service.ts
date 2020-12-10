import { Logger } from '@nestjs/common';
import { CacheService } from '../cache-service.interface';

export class InMemoryCache implements CacheService {
    private readonly logger = new Logger(InMemoryCache.name);
    private values = {};

    get<T>(key: string): Promise<T> {
        const data = this.values[key] as T;

        if (data) {
            this.logger.log(`CACHE HIT: ${key}`);
        } else {
            this.logger.log(`CACHE MISS: ${key}`);
        }

        return Promise.resolve(data);
    }

    set<T>(key: string, value: T): Promise<void> {
        this.logger.log(`CACHE SET: ${key}`);
        this.values[key] = value;

        return Promise.resolve();
    }
}
