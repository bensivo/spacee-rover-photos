import { IsNumberString, IsString } from 'class-validator';

export class DateParamDto {
    @IsString()
    year: string;

    @IsNumberString()
    month: string;

    @IsNumberString()
    day: string;
}
