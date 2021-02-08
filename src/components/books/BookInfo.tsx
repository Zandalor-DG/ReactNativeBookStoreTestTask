import {Card, WingBlank} from '@ant-design/react-native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {baseURL} from '../../api/axios';
import {StateReduxType} from '../../store/reducers';
import TabsBook from './TabsBook';

export const BookInfo: React.FC<{}> = () => {
  const book = useSelector(
    (state: StateReduxType) => state.bookStoreState.book?.book,
  );
  const genre = book?.Genre.map((item) => <Text>{`${item.name}`}</Text>);

  return (
    <>
      <WingBlank style={styles.book__wrapper} size="lg">
        <Card>
          <Card.Header
            title={`${book?.name} by ${book?.Author.name}`}
            thumbStyle={styles.book__cardHeader}
            thumb={
              <Image
                source={require('../../asset/arrow-right-bold-circle-outline.png')}
                //style={{width: 110, height: 150, margin: 20}}
              />
            }
            //extra={`by ${book.Author.name}`}
          />
          <Card.Body>
            <View style={styles.view__image}>
              <View style={styles.image__wrapper}>
                <Image
                  source={{uri: baseURL + book?.File.path_name}}
                  style={styles.book__image}
                />
                {/* <Text style={{marginLeft: 16}}>Card Content</Text> */}
              </View>
              <View style={styles.book__image}>
                <Text>genre: </Text>
                {genre}
              </View>
            </View>
          </Card.Body>
          <Card.Footer
            style={styles.bookCardFooter__wrapper}
            // content={
            //   <View style={styles.bookCartFooter__view}>
            //     <Button
            //       onPress={() => openBook(book.id)}
            //       title={'info'}
            //       color="#843cc7"
            //     />
            //   </View>
            // }
            // extra={
            //   <View style={styles.button__view}>
            //     <Button
            //       color="#843cc7"
            //       onPress={() => Alert.alert('your buy')}
            //       title={`in cart ${book.price}$`}
            //     />
            //   </View>
            // }
          />
        </Card>
      </WingBlank>
      <TabsBook
        description={book?.description}
        language={book?.language}
        theYearOfPublish={book?.theYearOfPublishing}
        numberPage={book?.numberOfPages}
        price={book?.price}
      />
    </>
  );
};

const styles = StyleSheet.create({
  book__wrapper: {marginTop: 10, marginBottom: 10},
  book__cardHeader: {width: 30, height: 30},
  view__image: {display: 'flex', flexDirection: 'row'},
  image__wrapper: {height: 155},
  book__image: {width: 110, height: 150, margin: 20},
  bookCard__text: {width: 180, height: 150, margin: 20},
  bookCardFooter__wrapper: {marginBottom: 10},
  bookCartFooter__view: {width: 120},
  button__view: {width: 140},
});
