import {PropsGetBook} from '../api/apiBookStore';
import {AllFilteringOptions} from './BookStore/allFilteringOptions';
import {BookStoreData} from './BookStore/bookStoreData';

export interface BookStoreState {
  books: BookStoreData[] | null;
  pageSize: number;
  countData: number;
  allFilteringOptions: AllFilteringOptions;
  book?: PropsGetBook;
  error?: string;
}
