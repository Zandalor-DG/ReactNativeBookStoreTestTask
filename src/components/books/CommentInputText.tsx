import React, {useEffect, useState} from 'react';
import {Button, ScrollView, StyleSheet, View} from 'react-native';
import {List, TextareaItem} from '@ant-design/react-native';
import {useSelector} from 'react-redux';
import {StateReduxType} from '../../store/reducers';

interface ICommentInputText {
  sendComment: (textInput: string | undefined) => void;
}

const CommentInputText: React.FC<ICommentInputText> = ({sendComment}) => {
  const [textInput, setTextInput] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [editable, setEditable] = useState<boolean>(false);
  const user = useSelector((state: StateReduxType) => state.userState.user);
  const titleButton = !user ? 'pls authorized' : 'subbmit';
  const colorButton = !user ? 'tomato' : '#4a3cc7';

  useEffect(() => {
    !user ? setEditable(false) : setEditable(true);
  }, [user]);

  const onChangeComment = (val: string | undefined) => {
    if (!val) {
      setError(true);
      return;
    }
    setTextInput(val);
  };

  return (
    <ScrollView
      style={styles.scrollView}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <List renderHeader={'Commnet'}>
        <TextareaItem
          rows={4}
          placeholder="your comment"
          autoHeight
          value={textInput}
          error={error}
          onChange={onChangeComment}
          clear
          editable={editable}
          style={styles.textAreaItem}
        />
        <View style={styles.buttonComment}>
          <Button
            color={colorButton}
            title={titleButton}
            onPress={() => sendComment(textInput)}
          />
        </View>
      </List>
    </ScrollView>
  );
};

export default CommentInputText;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  textAreaItem: {
    paddingVertical: 25,
  },
  buttonComment: {
    marginTop: 15,
    marginBottom: 15,
  },
});
