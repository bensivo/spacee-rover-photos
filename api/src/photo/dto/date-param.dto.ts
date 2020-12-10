import { IsNumberString } from 'class-validator';

export class DateParamDto {
    @IsNumberString()
    year: string;

    @IsNumberString()
    month: string;

    @IsNumberString()
    day: string;
}
