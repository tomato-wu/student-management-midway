// src/service/Employee.service.ts
import { Provide } from '@midwayjs/core';
import { Employee } from '../entity/employee.entity';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';

@Provide() //@Provide 表示这个类将会由系统自动实例化，在使用的时候，只需要使用@Inject注入就可以了；
export class EmployeeService {
  @InjectEntityModel(Employee) //@InjectEntityModel 注入实体模型数据库操作工具；
  EmployeeModel: Repository<Employee>;

  // 新增数据
  // async create(Employee: Employee): Promise<Employee> {
  //   const createdEmployee = await this.EmployeeModel.save(Employee);
  //   return createdEmployee;
  // }

  // 分支
  // 查询所有数据
  // async findEmployeeAll(): Promise<Employee[]> {
  //   // find All
  //   const allEmployees = await this.EmployeeModel.find({});
  //   return allEmployees;
  // }

  // 登录
  async Login(employee: Employee): Promise<Employee> {
    const EmployeeFind = await this.EmployeeModel.findOne({
      where: {
        account: employee.account,
        password: employee.password,
      },
    });
    return EmployeeFind;
  }

  // 删除数据
  // async delete(account: string): Promise<Employee> {
  //   const Employee = await this.EmployeeModel.findOne({
  //     where: {
  //       account: account,
  //     },
  //   });
  //   // 删除单个
  //   console.log('删除的数据', Employee);

  //   const res = await this.EmployeeModel.remove(Employee);
  //   console.log('删除的结果', res);

  //   return res;
  // }

  // 更新数据
  // async update(Employee: Employee): Promise<Employee> {
  //   const EmployeeToUpdate = await this.EmployeeModel.save(Employee);
  //   return EmployeeToUpdate;
  // }
}
