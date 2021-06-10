import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @HttpCode(204)
  createUser(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
  }

  @Get()
  getUsers() {
    return this.usersService.getUsersList();
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.usersService.getUser(Number(id));
  }
}
