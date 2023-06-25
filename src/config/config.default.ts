import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1687399566518_7104',
  koa: {
    port: 7001,
  },
  cors: {
    credentials: false,
  },
  //  添加orm配置
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        connection: 'student-management',
        username: 'root',
        password: 'as13534549384',
        database: 'midway',
        synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
        logging: false,
        // 配置实体模型-扫描实体
        entities: ['**/entity/*.ts'],
        dateStrings: true,
      },
    },
  },
} as MidwayConfig;
