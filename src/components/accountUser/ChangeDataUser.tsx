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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {updateUserData} from '../../store/userStore/thunkUser';
import {StateReduxType} from '../../store/reducers';

const ChangeDataUser: React.FC = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState<Date | undefined>(undefined);
  const dispatch = useDispatch();
  const user = useSelector((state: StateReduxType) => state.userState.user);
  const id = user?.id;

  const onChange = (value: Date) => {
    setDob(value);
  };

  const onChangeUserData = () => {
    dispatch(updateUserData({dob, email, fullName, id}));
  };

  return (
    <Provider locale={en_US}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <List renderHeader={'Change data user'}>
            <InputItem
              clear
              error={'' ? true : false}
              value={fullName}
              onChange={(value) => {
                setFullName(value);
              }}
              defaultValue={user?.fullName}
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
              defaultValue={user?.email}
              placeholder="your email pls">
              Email:
            </InputItem>
            <View style={styles.content}>
              <DatePicker
                value={dob}
                mode="date"
                defaultDate={new Date()}
                minDate={new Date(1940, 1, 1)}
                maxDate={new Date()}
                onChange={onChange}
                date={user?.dob}
                format="YYYY-MM-DD">
                <List.Item arrow="horizontal">Select Date</List.Item>
              </DatePicker>
            </View>

            <List.Item>
              <TouchableOpacity onPress={onChangeUserData}>
                <Button style={styles.button} type="primary">
                  Change data
                </Button>
              </TouchableOpacity>
            </List.Item>
          </List>
        </View>
      </View>
    </Provider>
  );
};

export default ChangeDataUser;

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
  button: {borderColor: '#153e8a', backgroundColor: '#153e8a'},
});
