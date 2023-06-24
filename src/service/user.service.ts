// src/service/user.service.ts
import { Provide } from '@midwayjs/core';
import { User } from '../entity/user.entity';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';

@Provide() //@Provide 表示这个类将会由系统自动实例化，在使用的时候，只需要使用@Inject注入就可以了；
export class UserService {
  @InjectEntityModel(User) //@InjectEntityModel 注入实体模型数据库操作工具；
  userModel: Repository<User>;

  // 新增数据
  async create(user: User): Promise<User> {
    const createdUser = await this.userModel.save(user);
    return createdUser;
  }

  // 查询所有数据
  async findUserAll(): Promise<User[]> {
    // find All
    const allUsers = await this.userModel.find({});
    return allUsers;
  }

  // 查询单条数据
  async findByUid(uid: string): Promise<User> {
    const userFind = await this.userModel.findOne({ where: { uid: uid } });
    return userFind;
  }

  // 删除数据
  async delete(uid: string): Promise<User> {
    const user = await this.userModel.findOne({
      where: {
        uid: uid,
      },
    });
    // 删除单个
    console.log('删除的数据', user);

    const res = await this.userModel.remove(user);
    console.log('删除的结果', res);

    return res;
  }

  // 更新数据
  async update(user: User): Promise<User> {
    const userToUpdate = await this.userModel.save(user);
    return userToUpdate;
  }
}
