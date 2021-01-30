// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Card, WingBlank} from '@ant-design/react-native';
import {Alert, Button, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {baseURL} from '../../api/axios';
import {StateReduxType} from '../../store/reducers';
import {useNavigation} from '@react-navigation/native';
import {bookInfo} from '../../store/bookStoreStore/thunkBookStore';
import HomeHeader from './HomeHeader';
import PaginationComponent from './PaginationComponent';

const BooksAll: React.FC = () => {
  const books = useSelector(
    (state: StateReduxType) => state.bookStoreState.books,
  );
  const nav = useNavigation();
  const dispatch = useDispatch();

  const openBook = (id: number) => {
    dispatch(bookInfo(id));
    nav.navigate('Book');
  };

  //navigation.navigate('Book')

  const content = !books ? (
    <View>
      <Text>Not Data</Text>
    </View>
  ) : (
    books.map((item) => (
      <WingBlank key={item.id} style={styles.allBook__wrapper} size="lg">
        <Card>
          <Card.Header
            title={`${item.name} by ${item.Author.name}`}
            thumbStyle={styles.allBook__cardHeader}
            thumb={
              <Image
                source={require('../../asset/arrow-right-bold-circle-outline.png')}
                //style={{width: 110, height: 150, margin: 20}}
              />
            }
            //extra={`by ${item.Author.name}`}
          />
          <Card.Body>
            <View style={styles.view__image}>
              <View style={styles.image__wrapper}>
                <Image
                  source={{uri: baseURL + item.File.path_name}}
                  style={styles.booksAll__image}
                />
                {/* <Text style={{marginLeft: 16}}>Card Content</Text> */}
              </View>
              <Text style={styles.bookCard__text}>{item.description}</Text>
              <View />
            </View>
          </Card.Body>
          <Card.Footer
            style={styles.bookCardFooter__wrapper}
            content={
              <View style={styles.bookCartFooter__view}>
                <Button
                  onPress={() => openBook(item.id)}
                  title={'info'}
                  color="#843cc7"
                />
              </View>
            }
            extra={
              <View style={styles.button__view}>
                <Button
                  color="#843cc7"
                  onPress={() => Alert.alert('your buy')}
                  title={`in cart ${item.price}$`}
                />
              </View>
            }
          />
        </Card>
      </WingBlank>
    ))
  );

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <HomeHeader />
      {content}
      <PaginationComponent />
    </ScrollView>
  );
};

export default BooksAll;

const styles = StyleSheet.create({
  allBook__wrapper: {marginTop: 10, marginBottom: 10},
  allBook__cardHeader: {width: 30, height: 30},
  view__image: {display: 'flex', flexDirection: 'row'},
  image__wrapper: {height: 155},
  booksAll__image: {width: 110, height: 150, margin: 20},
  bookCard__text: {width: 180, height: 150, margin: 20},
  bookCardFooter__wrapper: {marginBottom: 10},
  bookCartFooter__view: {width: 120},
  button__view: {width: 140},
});
