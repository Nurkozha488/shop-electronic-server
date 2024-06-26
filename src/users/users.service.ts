import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { User } from './users.model';
import { СreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) {}

    findOne(filter: {
        where: { id?: string; username?: string; email?: string };
    }): Promise<User> {
      return this.userModel.findOne({ ...filter });
    }

    async create
     (createUserDto: СreateUserDto,
    ): Promise<User | { warningMessage: string }> {
      const user = new User();
      const existingByUserName = await this.findOne({
        where: { username: createUserDto.username },
      });
      const existingByUserEmail = await this.findOne({
        where: { email: createUserDto.email },
    });

    if (existingByUserName) {
        return {warningMessage: 'Пользователь с таким именем уже существует'};
    }

    if (existingByUserEmail) {
        return {warningMessage: 'Пользователь с таким email уже существует'};
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    user.username = createUserDto.username;
    user.password = hashedPassword;
    user.email = createUserDto.email;

    return user.save();
  }
}
