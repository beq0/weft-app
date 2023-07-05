import { Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import { HttpService } from '@nestjs/axios';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly EXTERNAL_API_HOST = process.env.EXTERNAL_API_HOST;
  private axios: AxiosInstance;

  constructor(private readonly httpService: HttpService) {
    this.axios = httpService.axiosRef as AxiosInstance;
  }

  public async getUserList(): Promise<IUser[]> {
    const response = await this.axios.get(`${this.EXTERNAL_API_HOST}/users`);
    return response.data;
  }
}
