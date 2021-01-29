import {Button, InputItem, List} from '@ant-design/react-native';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

const SignUp: React.FC<{}> = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <List renderHeader={'Registration'}>
          <InputItem
            clear
            error={'' ? true : false}
            value={fullName}
            onChange={(value) => {
              setFullName(value);
            }}
            placeholder="your email pls">
            Second name:
          </InputItem>
          <InputItem
            clear
            error={'' ? true : false}
            value={email}
            onChange={(value) => {
              setEmail(value);
            }}
            placeholder="your email pls">
            Email:
          </InputItem>
          <InputItem
            clear
            type="password"
            value={password}
            onChange={(value) => {
              setPassword(value);
            }}
            placeholder="password">
            Pass:
          </InputItem>
          <InputItem
            clear
            error={'' ? true : false}
            value={dob}
            onChange={(value) => {
              setDob(value);
            }}
            placeholder="your email pls">
            Date of birthday:
          </InputItem>

          <List.Item>
            <Button
              style={{borderColor: '#c5c73c', backgroundColor: '#c5c73c'}}
              onPress={() => {}}
              type="primary">
              Sign up
            </Button>
          </List.Item>
        </List>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
