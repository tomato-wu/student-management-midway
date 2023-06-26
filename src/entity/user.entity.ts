// src/entity/user.ts
import { Entity, Column, PrimaryColumn } from 'typeorm';
// @EntityModel 用来定义一个实体类；
@Entity('studentinformation')
export class User {
  @PrimaryColumn({ length: 200 }) //@PrimaryColumn 用来定义一个主键，每个实体类必须要要主键；
  key: string;

  @Column({ length: 200 }) //@Column 用来描述类的一个熟悉，对应数据库就是一个数据列；
  userName: string;

  @Column({ length: 200 })
  className: string;

  @Column({ length: 200 })
  phoneNum: string;

  @Column({ length: 200 })
  email: string;

  @Column({ length: 200 })
  HomeAddress: string;
}
