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
  async findByKey(key: string): Promise<User[]> {
    if (!key) {
      return this.findUserAll();
    } else {
      const userFind = await this.userModel.findOne({ where: { key: key } });
      return [userFind];
    }
  }

  // 删除数据
  async delete(key: string): Promise<User> {
    const user = await this.userModel.findOne({
      where: {
        key: key,
      },
    });
    // 删除单个

    const res = await this.userModel.remove(user);

    return res;
  }

  // 更新数据
  async update(user: User): Promise<User> {
    const userToUpdate = await this.userModel.save(user);
    return userToUpdate;
  }
}
