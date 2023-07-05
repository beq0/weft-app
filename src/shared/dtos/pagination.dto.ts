import { IsNumber, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
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
