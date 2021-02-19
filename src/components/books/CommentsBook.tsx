import {Card, WingBlank} from '@ant-design/react-native';
import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {addNewComment} from '../../store/bookStoreStore/thunkBookStore';
import {StateReduxType} from '../../store/reducers';
import CommentInputText from './CommentInputText';

interface IReply {
  nameUser?: string;
  id: number | null;
}

const CommentsBook: React.FC<{}> = () => {
  const defaultImg = '../../asset/arrow-right-bold-circle-outline.png';
  const book = useSelector(
    (state: StateReduxType) => state.bookStoreState.book,
  );
  const [reply, setReply] = useState<string | undefined>();
  const [replyId, setReplyId] = useState<number | undefined>();
  const sendComment = (textInput: string | undefined) => {
    if (!textInput || !book?.book.id) {
      return;
    }
    addNewComment({comment: textInput, bookId: book?.book.id, reply, replyId});
  };
  const setReplyUser = ({id, nameUser}: IReply) => {
    if (!nameUser || !id) {
      return;
    }
    setReply(nameUser);
    setReplyId(id);
  };

  const content = book?.commentsBook.map((item) => {
    // const img = item.CommentUser.File.path_name
    //   ? baseURL + '/' + item.CommentUser.File.path_name
    //   : defaultImg;

    return (
      <WingBlank key={item.id} style={styles.allBook__wrapper} size="lg">
        <Card>
          <Card.Header
            title={`${item.CommentUser.email} by ${item.createdAt}`}
            thumbStyle={styles.allBook__cardHeader}
            thumb={
              <View>
                <Image
                  source={{
                    uri: defaultImg,
                  }}
                />
              </View>
            }
          />
          <Card.Body>
            <View>
              <Text style={styles.bookCard__text}>{item.comment}</Text>
              <View />
            </View>
          </Card.Body>
          <Card.Footer
            content={
              <Button
                color="#4a3cc7"
                title={`reply to ${item.CommentUser.email}`}
                onPress={() =>
                  setReplyUser({nameUser: item.reply, id: item.replyId})
                }
              />
            }
          />
        </Card>
      </WingBlank>
    );
  });

  return (
    <ScrollView>
      {content}
      <CommentInputText sendComment={sendComment} />
    </ScrollView>
  );
};

export default CommentsBook;

const styles = StyleSheet.create({
  allBook__wrapper: {marginTop: 10, marginBottom: 10},
  allBook__cardHeader: {width: 30, height: 30},
  view__image: {display: 'flex', flexDirection: 'row'},
  bookCard__text: {width: 180, margin: 20},
  bookCardFooter__wrapper: {marginBottom: 10},
  bookCartFooter__view: {width: 120},
  button__view: {width: 140},
});
