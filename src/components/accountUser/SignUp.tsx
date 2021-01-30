import {
  Button,
  DatePicker,
  InputItem,
  List,
  Provider,
} from '@ant-design/react-native';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import en_US from 'antd-mobile/lib/locale-provider/en_US';

const SignUp: React.FC<{}> = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const onChange = (value: Date) => {
    setDob(value);
  };
  const [dob, setDob] = useState<Date | undefined>(undefined);
  const [password, setPassword] = useState('');

  return (
    <Provider locale={en_US}>
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
            <View style={styles.content}>
              <DatePicker
                value={dob}
                mode="date"
                defaultDate={new Date()}
                minDate={new Date(1940, 1, 1)}
                maxDate={new Date()}
                onChange={onChange}
                format="YYYY-MM-DD">
                <List.Item arrow="horizontal">Select Date</List.Item>
              </DatePicker>
            </View>

            <List.Item>
              <Button style={styles.button} onPress={() => {}} type="primary">
                Sign up
              </Button>
            </List.Item>
          </List>
        </View>
      </View>
    </Provider>
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
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  button: {borderColor: '#c5c73c', backgroundColor: '#c5c73c'},
});
