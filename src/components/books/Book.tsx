import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {StateReduxType} from '../../store/reducers';

const Book: React.FC<{}> = () => {
  const book = useSelector(
    (state: StateReduxType) => state.bookStoreState.book?.book,
  );
  return (
    <View>
      <Text>{book?.name}</Text>
    </View>
  );
};

export default Book;
