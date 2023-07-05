import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { UserPostsQueryDto } from './dtos/user-posts-query.dto';

@Controller('users')
export class UserPostController {
  constructor(private readonly postService: PostService) {}

  @Get(':userId/posts')
  public async getUserPosts(
    @Param('userId', ParseIntPipe) userId: number,
    @Query() filterDto: UserPostsQueryDto,
  ) {
    return this.postService.getUserPosts(userId, filterDto);
  }
}
