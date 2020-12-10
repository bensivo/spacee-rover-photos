import {
    BadRequestException,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Logger,
    Param,
    Query,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { DateParamDto } from './dto/date-param.dto';
import { PhotoService } from './photo.service';

@Controller('/v1/rover/photo')
export class PhotoController {
    private readonly logger = new Logger(PhotoController.name);

    constructor(private photoService: PhotoService) {}

    @Get('/date/:year/:month/:day')
    @UsePipes(new ValidationPipe())
    public getMarsRoverPhoto(@Param() param: DateParamDto) {
        return this.photoService.getMarsRoverPhotos(+param.year, +param.month, +param.day);
    }
}
