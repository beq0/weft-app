import { IPagination } from '../../shared/interfaces';

export interface IPostFilter extends IPagination {
  userId?: number;
  title?: string;
}
