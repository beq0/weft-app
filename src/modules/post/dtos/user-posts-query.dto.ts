import { PaginationDto } from '../../../shared/dtos/pagination.dto';
import { IsOptional, IsString } from 'class-validator';

export class UserPostsQueryDto extends PaginationDto {
  @IsOptional()
  @IsString()
  title?: string;
}
