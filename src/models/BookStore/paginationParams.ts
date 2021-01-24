import {FilterState} from '../../components/filterComponent/filterReducer';

export interface PaginationParams {
  page: number;
  pageSize?: number;
  filterState?: FilterState;
}
