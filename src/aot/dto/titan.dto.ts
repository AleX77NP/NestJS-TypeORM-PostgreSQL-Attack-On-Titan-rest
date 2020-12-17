import {ApiProperty} from '@nestjs/swagger'

export class CreateTitanDto {
    @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly height: number;

    @ApiProperty()
    readonly currentUser: string;
}