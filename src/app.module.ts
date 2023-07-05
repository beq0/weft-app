import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, PostModule],
})
export class AppModule {}
