// import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import HomeHeader from './HomeHeader';
import PaginationComponent from '../books/PaginationComponent';
import AllBooks from '../books/AllBooks';
import {useDispatch} from 'react-redux';
import {loginUserByToken} from '../../store/userStore/thunkUser';
import {allBooks} from '../../store/bookStoreStore/thunkBookStore';
// import {getAllBooks} from '../../api/apiBookStore';
// import axios from 'axios';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginUserByToken());
    dispatch(allBooks({page: 1, pageSize: 6}));
  }, [dispatch]);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <HomeHeader />
      <AllBooks />
      <PaginationComponent />
    </ScrollView>
  );
};

export default HomeScreen;
