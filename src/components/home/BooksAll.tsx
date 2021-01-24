import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {baseURL} from '../../api/axios';
// import {baseURL} from '../../api/axios';
import {StateReduxType} from '../../store/reducers';

interface Props {
  navigation: any;
}

const BooksAll: React.FC<Props> = ({navigation}: Props) => {
  const books = useSelector(
    (state: StateReduxType) => state.bookStoreState.books,
  );

  const content = !books ? (
    <View>
      <Text>Not Data</Text>
    </View>
  ) : (
    books.map((item) => {
      return (
        <View key={item.id} style={styles.sectionContainer}>
          <View style={styles.buttonContainer}>
            <Button
              color="tomato"
              title={item.name}
              onPress={() => navigation.navigate('Book')}
            />
          </View>
          <Image
            source={{uri: baseURL + item.File.path_name}}
            style={{width: 80, height: 140}}
          />
          <Text>by {item.Author.name}</Text>
          <Text>Price: {item.price}</Text>
        </View>
      );
    })
  );

  return (
    <View>
      <ScrollView
        style={styles.scrollView}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.body}>{content}</View>
      </ScrollView>
    </View>
  );
};

export default BooksAll;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  buttonContainer: {
    shadowRadius: 2,
    marginBottom: 32,
    paddingHorizontal: 24,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
