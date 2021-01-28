import {Flex} from '@ant-design/react-native';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const HomeHeader = () => {
  return (
    <View style={styles.image__wrapper}>
      <Image
        // сделать картинку прозрачнее
        source={require('../../asset/bookStore.jpg')}
      />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  image__wrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 400,
    height: 400,
  },
});
