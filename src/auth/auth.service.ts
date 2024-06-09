import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async validateUser(username: string, password: string) {
        const user = await this.usersService.findOne({ where: { username } });

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const passwordvalid = await bcrypt.compare(password, user.password);

        if (!passwordvalid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        if (user && passwordvalid) {
            return {
                userId: user.id,
                username: user.username,
                email: user.email
            }
        }

        return null;
    }
}
