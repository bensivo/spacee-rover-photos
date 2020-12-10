import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    public get NASA_API_KEY() {
        return process.env['NASA_API_KEY'];
    }

    public get CACHE_MECHANISM() {
        return process.env['CACHE_MECHANISM'];
    }
}
