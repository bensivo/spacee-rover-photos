import 'jest';
import { Test } from '@nestjs/testing';
import { PhotoService } from './photo.service';
import { NasaModule } from '../nasa/nasa.module';
import { NasaClient } from '../nasa/nasa.client';
import { CacheService } from '../cache/cache-service.interface';
import { CacheModule } from '../cache/cache.module';

describe('Photo Service', () => {
    let photoService: PhotoService;
    let nasaClient: NasaClient;
    let cache: CacheService;

    beforeEach(async () => {
        const testModule = await Test.createTestingModule({
            imports: [NasaModule, CacheModule],
            providers: [PhotoService],
        })
            // .overrideProvider('CACHE')
            // .useValue(new InMemoryCache())
            .compile();

        photoService = await testModule.get(PhotoService);
        nasaClient = await testModule.get(NasaClient);
        cache = await testModule.get('CACHE');
    });

    it('Calls the Nasa Module on startup', async () => {
        const getMarsRoverPhotosForDateSpy = jest
            .spyOn(nasaClient, 'getMarsRoverPhotosForDate')
            .mockImplementation((_y, _m, _d) => {
                return Promise.resolve([
                    {
                        id: 102685,
                        sol: 1004,
                        camera: {
                            id: 20,
                            name: 'FHAZ',
                            rover_id: 5,
                            full_name: 'Front Hazard Avoidance Camera',
                        },
                        img_src:
                            'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG',
                        earth_date: '2015-06-03',
                        rover: {
                            id: 5,
                            name: 'Curiosity',
                            landing_date: '2012-08-06',
                            launch_date: '2011-11-26',
                            status: 'active',
                        },
                    },
                ]);
            });

        const cacheSetSpy = jest
            .spyOn(cache, 'set')
            .mockReturnValue(Promise.resolve());

        // We won't test whether nestJS calls applicatonbootstrap on start. That's a given
        await photoService.onApplicationBootstrap();

        // There are 4 dates in dates.txt, so it should be called 4 times
        expect(getMarsRoverPhotosForDateSpy).toHaveBeenCalledTimes(4);
        expect(cacheSetSpy).toHaveBeenCalled();
    });
});
