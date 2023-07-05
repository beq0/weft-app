import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { HttpModule } from '@nestjs/axios';
import { UserPostController } from './user-post.controller';
import { Post } from './post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostCheck } from './post-check/post-check.entity';
import { PostController } from './post.controller';
import {PostCheckService} from "./post-check/post-check.service";
import {PostExternalService} from "./post-external/post-external.service";
import {PostRepository} from "./post.repository";

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Post, PostCheck])],
  controllers: [PostController, UserPostController],
  providers: [PostService, PostCheckService, PostExternalService, PostRepository],
})
export class PostModule {}
