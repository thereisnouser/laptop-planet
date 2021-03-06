import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { CreateUserResult } from './interfaces/createUserResult.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() dto: CreateUserDto): CreateUserResult {
    return this.usersService.createUser(dto);
  }

  @Get()
  getUsers(): GetUserDto[] {
    return this.usersService.getUsersList();
  }

  @Get(':id')
  getUser(@Param('id') id: number): GetUserDto {
    const user = this.usersService.getUser(Number(id));

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
