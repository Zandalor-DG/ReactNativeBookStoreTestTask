import {List} from '@ant-design/react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {StateReduxType} from '../../store/reducers';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = () => {
  const shoppingCart = useSelector(
    (state: StateReduxType) => state.shoppingCardState.productInCart,
  );

  const content = shoppingCart?.map((item) => (
    <ShoppingCartItem book={item.Book} id={item.bookId} count={item.count} />
  ));

  return (
    <ScrollView>
      <List>{content}</List>
    </ScrollView>
  );
};

export default ShoppingCart;
