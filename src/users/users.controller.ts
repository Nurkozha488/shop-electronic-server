import { 
    Body, 
    Controller, 
    Get, 
    Header, 
    HttpCode, 
    HttpStatus, 
    Post, 
    Request,
    UseGuards
} from '@nestjs/common';
import { UsersService } from './users.service';
import { СreateUserDto } from './dto/create-user.dto';
import { localAuthGuard } from 'src/auth/local.auth.guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { LoginCheckResponse, LoginUserRequest, LoginUserResponse, LogoutUserResponse, SignupResponse } from './types';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @ApiOkResponse({ type: SignupResponse })
    @Post('/signup')
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-type', 'application/json')
    createUser(@Body() createUserDto: СreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @ApiBody({ type: LoginUserRequest })
    @ApiOkResponse({ type: LoginUserResponse })
    @Post('/login')
    @UseGuards(localAuthGuard)
    @HttpCode(HttpStatus.OK)
    login(@Request() req) {
        return { user: req.user, msg: 'Logged in' };
    }

    @ApiOkResponse({ type: LoginCheckResponse })
    @Get('/login-check')
    @UseGuards(AuthenticatedGuard)
    loginCheck(@Request() req) {
        return req.user;
    }

    @ApiOkResponse({ type: LogoutUserResponse })
    @Get('/logout')
    logout(@Request() req) {
        req.session.destroy();
        return { msg: 'session has ended' };
    }
}
