import React from 'react';
import {Button, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const CreatePostScreen = ({navigation}: any) => {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', {post: postText});
        }}
      />
      <View>
        <Button
          title="send Navigation params"
          onPress={() => {
            navigation.navigate('Navigation', {
              screen: 'CreatePost',
              params: {user: 'jane'},
            });
          }}
        />
      </View>
    </>
  );
};

export default CreatePostScreen;
