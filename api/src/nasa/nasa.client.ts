import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '../config/config.service';
import { MarsRoverPhoto } from './interface/mars-rover-photo.interface';

@Injectable()
export class NasaClient {
    private readonly logger = new Logger(NasaClient.name);

    constructor(private configService: ConfigService) {}

    /**
     * Call the Nasa api, and retrieve mars-rover photos for the given date.
     *
     * @param year 4 digit year
     * @param month Month number
     * @param day Day number
     */
    public getMarsRoverPhotosForDate(
        year: number,
        month: number,
        day: number,
    ): Promise<MarsRoverPhoto[]> {
        this.logger.log(`Retrieving photos for date ${year}-${month}-${day}`);

        return axios
            .request({
                method: 'GET',
                url:
                    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
                params: {
                    earth_date: `${year}-${month}-${day}`,
                    api_key: this.configService.NASA_API_KEY,
                },
            })
            .then((res) => res.data);
    }
}
