import {PropsGetBook} from '../../api/apiBookStore';
import {AllFilteringOptions} from '../../models/BookStore/allFilteringOptions';
import {
  BookStoreData,
  CommentState,
} from '../../models/BookStore/bookStoreData';

export enum ActionTypeBookStore {
  SetCountData = 'SetCountData',
  SetError = 'SetError',
  SetPageSize = 'SetPageSize',
  SetBookStoreState = 'SetBookStoreState',
  SetAllFilteringOptions = 'SetAllFilteringOptions',
  SetBookState = 'SetBookState',
  AddComment = 'AddComment',
  AddOrUpdateRate = 'AddOrUpdateRate',
}

export type ActionSetCountData = {
  type: ActionTypeBookStore.SetCountData;
  countData: number;
};

export type ActionSetPageSize = {
  type: ActionTypeBookStore.SetPageSize;
  pageSize: number;
};

export type ActionSetAllFilteringOptions = {
  type: ActionTypeBookStore.SetAllFilteringOptions;
  allFilteringOptions: AllFilteringOptions;
};

export type ActionSetBookState = {
  type: ActionTypeBookStore.SetBookState;
  data: PropsGetBook;
};

export type ActionAddComment = {
  type: ActionTypeBookStore.AddComment;
  comment: CommentState[];
};

export type ActionAddOrUpdateRate = {
  type: ActionTypeBookStore.AddOrUpdateRate;
  rate: number;
};

export type ActionSetBookStoreState = {
  type: ActionTypeBookStore.SetBookStoreState;
  books: BookStoreData[];
};

export type ActionSetErrorBookStore = {
  type: ActionTypeBookStore.SetError;
  error: string;
};

export type ActionBookStore =
  | ActionSetCountData
  | ActionSetPageSize
  | ActionSetBookStoreState
  | ActionSetAllFilteringOptions
  | ActionSetErrorBookStore
  | ActionSetBookState
  | ActionAddComment
  | ActionAddOrUpdateRate;
