import { Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import { HttpService } from '@nestjs/axios';
import { IPostExternal } from './interfaces';

@Injectable()
export class PostExternalService {
  private readonly EXTERNAL_API_HOST = process.env.EXTERNAL_API_HOST;
  private axios: AxiosInstance;

  constructor(private readonly httpService: HttpService) {
    this.axios = httpService.axiosRef as AxiosInstance;
  }

  public async getUserPosts(userId: number): Promise<IPostExternal[]> {
    const response = await this.axios.get(
      `${this.EXTERNAL_API_HOST}/posts?userId=${userId}`,
    );
    return response.data;
  }
}
