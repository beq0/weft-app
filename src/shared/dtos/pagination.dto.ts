import { IsNumber, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { IPagination } from '../interfaces';

export class PaginationDto implements IPagination {
  @IsOptional()
  @Type(() => Number)
  @Min(0)
  @IsNumber()
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @Min(1)
  @IsNumber()
  pageSize?: number;
}
