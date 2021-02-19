import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {baseURL} from '../../api/axios';

interface IShoppingItem {
  book: {
    name: string;
    price: number;
    totalPrice: number;
    Author: {
      name: string;
    };
    File: {
      path_name: string;
    };
  };
  id: number;
  count: number;
}

const ShoppingCartItem: React.FC<IShoppingItem> = ({book, count, id}) => {
  return (
    <View>
      <Image
        source={{uri: baseURL + book?.File.path_name}}
        style={styles.book__image}
      />
      <Text>
        {book.name} by {book.Author.name}
      </Text>
      <TouchableOpacity>
        <Text>+</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity>
        <Text>-</Text>
      </TouchableOpacity>
      <Text>{book.price}</Text>
      <TouchableOpacity>
        <Text>Buy</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingCartItem;

const styles = StyleSheet.create({
  book__image: {
    width: 40,
    height: 80,
  },
});
