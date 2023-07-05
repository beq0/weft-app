import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostCheck } from './post-check.entity';

@Injectable()
export class PostCheckService {
  constructor(
    @InjectRepository(PostCheck)
    private postCheckRepository: Repository<PostCheck>,
  ) {}

  public async hasUserCheckedPosts(userId: number): Promise<boolean> {
    const postCheck = await this.postCheckRepository.findOneBy({ userId });

    return !!postCheck;
  }

  public async markCheckedForUser(userId: number): Promise<PostCheck> {
    return this.postCheckRepository.save({
      userId,
    });
  }
}
