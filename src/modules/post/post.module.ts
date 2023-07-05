import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { HttpModule } from '@nestjs/axios';
import { UserPostController } from './user-post.controller';

@Module({
  imports: [HttpModule],
  controllers: [UserPostController],
  providers: [PostService],
})
export class PostModule {}
