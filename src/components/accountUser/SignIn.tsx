import {Button, InputItem, List} from '@ant-design/react-native';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

const SignIn: React.FC<{}> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <List renderHeader={'Authorization'}>
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

          <List.Item>
            <Button
              style={{borderColor: '#3cc753', backgroundColor: '#3cc753'}}
              onPress={() => {}}
              type="primary">
              Sign in
            </Button>
          </List.Item>
        </List>
      </View>
    </View>
  );
};

export default SignIn;

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
