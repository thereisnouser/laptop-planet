import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { CreateUserResult } from './interfaces/createUserResult.interface';

@Injectable()
export class UsersService {
  usersList = [
    {
      id: 1,
      name: 'Markus',
      password: 'password1',
    },
    {
      id: 2,
      name: 'John',
      password: 'password2',
    },
    {
      id: 3,
      name: 'Jame',
      password: 'password3',
    },
  ];

  createUser(user: CreateUserDto): CreateUserResult {
    this.usersList.push(user);

    return {
      status: 'User was successfully created',
      id: user.id,
    };
  }

  getUser(id: number): GetUserDto {
    const index = this.usersList.findIndex(item => item.id === id);

    return this.usersList[index];
  }

  getUsersList(): GetUserDto[] {
    return this.usersList;
  }
}
