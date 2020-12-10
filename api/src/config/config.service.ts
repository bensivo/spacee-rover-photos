import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfigService {

    public get NASA_API_KEY() {
        // TODO: Switch to env variable
        return 'rZ6HdXfFtuZu3ETMqW78jNxvdf4W2isPCzEBfs2H';
    }

    public get CACHE_MECHANISM() {
        return 'in-memory'
    }
}