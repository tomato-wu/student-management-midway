// src/controller/user.controller.ts
import { Inject, Controller, Query, Post, Body, Get } from '@midwayjs/core';
import { User } from '../entity/user.entity';
import { UserService } from '../service/user.service';

@Controller('/api/user')
export class UserController {
  @Inject()
  userService: UserService;

  @Get('/findAllUser', { description: '获取所有用户' })
  async findAll() {
    const user = await this.userService.findUserAll();
    console.log('答应', user);
    return user;
  }

  @Get('/findByUid', { description: '通过主键查找' })
  async findById(@Query('uid') uid: string): Promise<User> {
    return this.userService.findByUid(uid);
  }

  @Post('/create', { description: '创建' })
  async create(@Body() user: User): Promise<User> {
    const res = await this.userService.create(user);
    console.log('创建成功', res);
    return res;
  }

  @Post('/delete', { description: '删除' })
  async delete(@Query('uid') uid: string): Promise<User> {
    return this.userService.delete(uid);
  }
}
