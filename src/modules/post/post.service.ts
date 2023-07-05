import { Injectable } from '@nestjs/common';
import { UserPostsQueryDto } from './dtos/user-posts-query.dto';
import { AxiosInstance } from 'axios';
import { HttpService } from '@nestjs/axios';
import { IPostExternal } from './interfaces/post-external.interface';

@Injectable()
export class PostService {
  private readonly EXTERNAL_API_HOST = process.env.EXTERNAL_API_HOST;
  private axios: AxiosInstance;

  constructor(private readonly httpService: HttpService) {
    this.axios = httpService.axiosRef as AxiosInstance;
  }

  public async getUserPosts(
    userId: number,
    filterDto: UserPostsQueryDto,
  ): Promise<IPostExternal> {
    const response = await this.axios.get(
      `${this.EXTERNAL_API_HOST}/posts?userId=${userId}`,
    );
    return response.data;
  }
}
