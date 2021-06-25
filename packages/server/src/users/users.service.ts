import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';

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

  createUser(user: CreateUserDto) {
    this.usersList.push(user);
  }

  getUser(id: number): GetUserDto {
    const index = this.usersList.findIndex(item => item.id === id);

    return this.usersList[index];
  }

  getUsersList(): GetUserDto[] {
    return this.usersList;
  }
}
