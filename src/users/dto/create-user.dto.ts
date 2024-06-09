import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class СreateUserDto {
    @ApiProperty({ example: 'Nurkozha' })
    @IsNotEmpty()
    readonly username: string;

    @ApiProperty({ example: 'Nurkozha123' })
    @IsNotEmpty()
    readonly password: string;

    @ApiProperty({ example: 'Nurkozha@gmail.com' })
    @IsNotEmpty()
    readonly email: string;
}