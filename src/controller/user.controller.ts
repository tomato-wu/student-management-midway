// src/controller/user.controller.ts
import { Inject, Controller, Query, Post, Body, Get } from '@midwayjs/core';
import { User } from '../entity/user.entity';
import { UserService } from '../service/user.service';

@Controller('/api/user')
export class UserController {
  @Inject()
  userService: UserService;
  // 查
  @Get('/findAllUser', { description: '获取所有用户' })
  async findAll() {
    const user = await this.userService.findUserAll();
    if (!user) {
      return { status: 404, message: 'Not Data' };
    }
    return { status: 200, message: 'success', data: user };
  }
  // 查
  @Get('/findBykey', { description: '通过主键查找' })
  async findById(@Query('key') key: string) {
    const UserBykey = await this.userService.findByKey(key);
    if (!UserBykey) {
      return { status: 404, message: 'Not Data' };
    }
    return { status: 200, message: 'success', data: UserBykey };
  }
  // 增
  @Post('/create', { description: '创建' })
  async create(@Body() user: User) {
    const res = await this.userService.create(user);
    if (!res) {
      return { status: 404, message: 'Not Data' };
    }
    return { status: 200, message: 'success', data: res };
  }
  // 改
  @Post('/update', { description: '修改信息' })
  async update(@Body() user: User) {
    const res = await this.userService.update(user);
    if (!res) {
      return { status: 404, message: 'Not Data' };
    }
    return { status: 200, message: 'success', data: res };
  }
  // 删
  @Post('/delete', { description: '删除' })
  async delete(@Query('key') key: string) {
    const res = await this.userService.delete(key);
    if (!res) {
      return { status: 404, message: 'Not Data' };
    }
    return { status: 200, message: 'success', data: res };
  }
}
