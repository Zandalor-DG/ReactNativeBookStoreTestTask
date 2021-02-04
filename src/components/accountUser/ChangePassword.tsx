import {Button, InputItem, List} from '@ant-design/react-native';
import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ChangePassword: React.FC<{}> = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [errorNewPassword, setErrorNewPassword] = useState(false);

  const onChangePassword = () => {
    if (newPassword !== confirmPassword) {
      setErrorConfirmPassword(true);
      Alert.alert('bad confirm password');
      return;
    }
    if (password === newPassword) {
      setErrorNewPassword(true);
      Alert.alert('new password copy old password');
      return;
    }
  };

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
              Old password:
            </InputItem>
            <InputItem
              clear
              error={errorNewPassword}
              type="password"
              value={newPassword}
              onChange={(value) => {
                setNewPassword(value);
              }}
              placeholder="password">
              New pass:
            </InputItem>
            <InputItem
              clear
              error={errorConfirmPassword}
              type="password"
              value={confirmPassword}
              onChange={(value) => {
                setConfirmPassword(value);
              }}
              placeholder="password">
              Confirm password:
            </InputItem>

            <List.Item>
              <TouchableOpacity onPress={onChangePassword}>
                <Button style={styles.button} type="primary">
                  Change data
                </Button>
              </TouchableOpacity>
            </List.Item>
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
