import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORMConfig } from '../ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    PostModule,
    TypeOrmModule.forRoot(ORMConfig),
  ],
})
export class AppModule {}
