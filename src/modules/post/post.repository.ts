import { Injectable } from '@nestjs/common';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IPostFilter } from './interfaces';

@Injectable()
export class PostRepository extends Repository<Post> {
  constructor(
    @InjectRepository(Post)
    repository: Repository<Post>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  public async getList(filters: IPostFilter): Promise<Post[]> {
    const { page, pageSize, ...filterData } = filters;
    const _page = !!page ? page - 1 : 0;
    const _pageSize = pageSize || 50;

    const where: FindOptionsWhere<Post> = {
      ...filterData,
    };

    if (where.title) {
      where.title = Like(`%${where.title}%`);
    }

    return this.find({
      where,
      skip: _page * _pageSize,
      take: _pageSize,
    });
  }

  public async deleteById(id: number): Promise<boolean> {
    const deleteResult = await this.delete({
      id,
    });

    return !!deleteResult.affected;
  }
}
