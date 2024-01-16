import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Role } from "src/enums/role.enum";

export class UsersDto{
    @IsNotEmpty()
    @IsNumber()
    readonly userId: number;

    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;

    @IsNotEmpty()
    readonly roles: Role[];
}