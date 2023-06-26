// src/controller/Employee.controller.ts
import { Inject, Controller, Post, Body } from '@midwayjs/core';
// import { Employee } from '../entity/employee.entity';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../entity/employee.entity';

@Controller('/api/employee')
export class EmployeeController {
  @Inject()
  EmployeeService: EmployeeService;
  //登录
  @Post('/login', { description: '登录' })
  async Login(@Body() employee: Employee) {
    const res = await this.EmployeeService.Login(employee);
    if (!res) {
      return { status: 404, message: 'Not Data' };
    }
    return { status: 200, message: 'success', data: res };
  }
}
