import {PropsGetBook} from '../../api/apiBookStore';
import {AllFilteringOptions} from '../../models/BookStore/allFilteringOptions';
import {
  BookStoreData,
  CommentState,
} from '../../models/BookStore/bookStoreData';
import {
  ActionAddComment,
  ActionAddOrUpdateRate,
  ActionSetAllFilteringOptions,
  ActionSetBookState,
  ActionSetBookStoreState,
  ActionSetErrorBookStore,
  ActionSetPageSize,
  ActionSetCountData,
  ActionTypeBookStore,
} from './actionTypesBookStore';

export const setCountData = (countData: number): ActionSetCountData => ({
  type: ActionTypeBookStore.SetCountData,
  countData,
});

export const setAllFilteringOptions = (
  allFilteringOptions: AllFilteringOptions,
): ActionSetAllFilteringOptions => ({
  type: ActionTypeBookStore.SetAllFilteringOptions,
  allFilteringOptions,
});

export const setPageSize = (pageSize: number): ActionSetPageSize => ({
  type: ActionTypeBookStore.SetPageSize,
  pageSize,
});

export const addComment = (commentData: CommentState[]): ActionAddComment => ({
  type: ActionTypeBookStore.AddComment,
  comment: commentData,
});

export const addOrUpdateRate = (rate: number): ActionAddOrUpdateRate => ({
  type: ActionTypeBookStore.AddOrUpdateRate,
  rate,
});

export const setBookState = (data: PropsGetBook): ActionSetBookState => ({
  type: ActionTypeBookStore.SetBookState,
  data,
});

export const SetBookStoreState = (
  books: BookStoreData[],
): ActionSetBookStoreState => ({
  type: ActionTypeBookStore.SetBookStoreState,
  books,
});

export const setErrorBookStore = (error: string): ActionSetErrorBookStore => ({
  type: ActionTypeBookStore.SetError,
  error,
});
