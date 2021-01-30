// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Card, WingBlank} from '@ant-design/react-native';
import {Alert, Button, Image, Text, View} from 'react-native';
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
      <WingBlank
        key={item.id}
        style={{marginTop: 10, marginBottom: 10}}
        size="lg">
        <Card>
          <Card.Header
            title={`${item.name} by ${item.Author.name}`}
            thumbStyle={{width: 30, height: 30}}
            thumb={
              <Image
                source={require('../../asset/arrow-right-bold-circle-outline.png')}
                //style={{width: 110, height: 150, margin: 20}}
              />
            }
            //extra={`by ${item.Author.name}`}
          />
          <Card.Body>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View style={{height: 155}}>
                <Image
                  source={{uri: baseURL + item.File.path_name}}
                  style={{width: 110, height: 150, margin: 20}}
                />
                {/* <Text style={{marginLeft: 16}}>Card Content</Text> */}
              </View>
              <Text style={{width: 180, height: 150, margin: 20}}>
                {item.description}
              </Text>
              <View />
            </View>
          </Card.Body>
          <Card.Footer
            style={{marginBottom: 10}}
            content={
              <View
                style={{
                  width: 120,
                }}>
                <Button
                  onPress={() => openBook(item.id)}
                  title={'info'}
                  color="#843cc7"
                />
              </View>
            }
            extra={
              <View
                style={{
                  width: 140,
                }}>
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
