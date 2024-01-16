import {
    Controller,
    Get,
    Request,
    UseGuards,
    Post,
    Put,
    Delete,
    Body,
  } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { UsersDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { RolesGuard } from 'src/guards/role.guard';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @UseGuards(AuthGuard,RolesGuard)
    @Get('profile')
    @Roles(Role.ADMIN)
    getProfile(@Request() req) {
        return req.user;
    }

    @UseGuards(AuthGuard,RolesGuard)
    @Post('add')
    @Roles(Role.ADMIN)
    addProfile(@Body() usersDto: UsersDto) {
        return this.usersService.addProfile(usersDto);
    }

    @UseGuards(AuthGuard,RolesGuard)
    @Put('edit')
    @Roles(Role.ADMIN)
    editProfile(@Body() usersDto: UsersDto) {
        return this.usersService.editProfile(usersDto);
    }

    @UseGuards(AuthGuard,RolesGuard)
    @Delete('delete')
    @Roles(Role.ADMIN)
    deleteProfile(@Body() usersDto: UsersDto) {
        return this.usersService.deleteProfile(usersDto);
    }

    @UseGuards(AuthGuard,RolesGuard)
    @Get('details')
    @Roles(Role.USER)
    getUserDetails(@Request() req) {
        return req.user;
    }
}
