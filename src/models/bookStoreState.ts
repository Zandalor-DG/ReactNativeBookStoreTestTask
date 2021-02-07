import {PropsGetBook} from '../api/apiBookStore';
import {AllFilteringOptions} from './BookStore/allFilteringOptions';
import {BookStoreData} from './BookStore/bookStoreData';
import DrawerLayout from '@bang88/react-native-drawer-layout';

export interface BookStoreState {
  books: BookStoreData[] | null;
  pageSize: number;
  countData: number;
  allFilteringOptions: AllFilteringOptions;
  book?: PropsGetBook;
  drawer: DrawerLayout | null;
  isOpenDrawer: boolean;
  error?: string;
}
