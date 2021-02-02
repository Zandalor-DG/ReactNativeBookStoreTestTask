import {InputItem, List} from '@ant-design/react-native';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

const ChangePassword: React.FC<{}> = () => {
  const [password, setPassword] = useState('');

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <List renderHeader={'Registration'}>
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
          </List>
        </View>
      </View>
    </>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  button: {borderColor: '#96434e', backgroundColor: '#96434e'},
});
