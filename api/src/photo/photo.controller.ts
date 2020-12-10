import {
    Controller,
    Get,
    Query,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { DateParamDto } from './dto/date-param.dto';
import { PhotoService } from './photo.service';

@Controller('/v1/rover/photo')
export class PhotoController {
    constructor(private photoService: PhotoService) {}

    // TODO: Implement a custom validator so we can pass dates as a single string '2015-6-5'
    @Get('/')
    @UsePipes(new ValidationPipe())
    public getMarsRoverPhoto(@Query() date: DateParamDto) {
        const [year, month, day] = [
            parseInt(date.year),
            parseInt(date.month),
            parseInt(date.day),
        ];

        return this.photoService.getMarsRoverPhotos(year, month, day);
    }
}
