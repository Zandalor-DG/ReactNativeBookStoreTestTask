// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Grid} from '@ant-design/react-native';
import {Alert, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {baseURL} from '../../api/axios';
import {StateReduxType} from '../../store/reducers';

const BooksAll: React.FC = () => {
  const books = useSelector(
    (state: StateReduxType) => state.bookStoreState.books,
  );
  const data = books?.map((item) => ({
    icon: (
      <Image
        source={{uri: baseURL + item.File.path_name}}
        style={{width: 110, height: 160}}
      />
    ),
    //icon: baseURL + item.File.path_name,
    text: item.name,
  }));
  //const navigation = useNavigation();
  //navigation.navigate('Book')

  const content = !books ? (
    <View>
      <Text>Not Data</Text>
    </View>
  ) : (
    <Grid
      data={data}
      columnNum={2}
      onPress={(_el, index) => Alert.alert(`${index}`)}
    />
  );

  return (
    <ScrollView
      //style={styles.scrollView}
      contentInsetAdjustmentBehavior="automatic">
      {/* <StatusBar
        translucent
        backgroundColor="#843cc7"
        //barStyle="light-content"
      /> */}
      <View style={styles.sectionContainer}>{content}</View>
    </ScrollView>
  );
};

export default BooksAll;

const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 24,
  },
});
