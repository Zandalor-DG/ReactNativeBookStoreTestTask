import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {allBooks} from '../../store/bookStoreStore/thunkBookStore';
import {FilterState} from '../filterComponent/filterReducer';
import BooksAll from './BooksAll';

interface Props {
  route: {
    params?: {
      post: string;
      filterParams: FilterState;
    };
  };
  navigation: any;
}

const HomeScreen: React.FC<Props> = ({navigation, route}: Props) => {
  //const value = route.params?.filterParams;
  const dispatch = useDispatch();

  // const [filterState, filterDispatch] = useReducer(
  //   filterReducer,
  //   value as FilterState,
  //   getInitialFilterState,
  // );
  dispatch(allBooks({page: 1, pageSize: 8}));

  useEffect(() => {
    dispatch(allBooks({page: 1, pageSize: 8}));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (route.params?.post) {
    }
  }, [route.params]);

  return (
    <>
      <BooksAll navigation={navigation} />
    </>
  );
};

export default HomeScreen;
