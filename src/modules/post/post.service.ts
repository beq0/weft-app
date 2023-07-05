import { Injectable } from '@nestjs/common';
import { UserPostsQueryDto } from './dtos/user-posts-query.dto';
import { Post } from './post.entity';
import { PostCheckService } from './post-check/post-check.service';
import { PostExternalService } from './post-external/post-external.service';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(
    private readonly postCheckService: PostCheckService,
    private readonly postExternalService: PostExternalService,
    private readonly postRepository: PostRepository,
  ) {}

  public async getUserPosts(
    userId: number,
    filterDto: UserPostsQueryDto,
  ): Promise<Post[]> {
    const userHasCheckedPosts = await this.postCheckService.hasUserCheckedPosts(
      userId,
    );
    if (!userHasCheckedPosts) {
      const externalPosts = await this.postExternalService.getUserPosts(userId);
      await this.postRepository.save(externalPosts.map((post) => ({
        userId: userId,
        title: post.title,
        body: post.body,
      })));
      await this.postCheckService.markCheckedForUser(userId);
    }

    return this.postRepository.getList({
      ...filterDto,
      userId,
    });
  }

  public async deleteById(id: number): Promise<boolean> {
    return this.postRepository.deleteById(id);
  }
}
