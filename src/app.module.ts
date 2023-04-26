import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';

@Module({
  imports:
 [ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'postgres',
    entities: [],
    synchronize: true,
    autoLoadEntities: true,
    }),
  UserModule,
  AuthModule,
  TaskModule,
],


  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
