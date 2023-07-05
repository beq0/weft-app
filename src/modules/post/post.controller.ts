import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Delete(':id')
  public async deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.postService.deleteById(id);
  }
}
