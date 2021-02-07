import {Drawer, List} from '@ant-design/react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FilterComponent from '../filterScreen/FilterComponent';
import DrawerLayout from '@bang88/react-native-drawer-layout';
import {useDispatch} from 'react-redux';
import {
  openDrawer,
  setDrawler,
} from '../../store/bookStoreStore/actionCreatedBookStore';

const DrawerScreen: React.FC<{}> = ({children}) => {
  // const dispatch = useDispatch();
  // const onOpenChange = (isOpen: boolean) => {
  //   dispatch(openDrawer(isOpen));
  //   console.log('Drawer', isOpen.toString());
  // };

  // const onSetDrawer = (el: DrawerLayout | null) => {
  //   console.log('el', el);
  //   dispatch(setDrawler(el));
  // };

  const sidebar = (
    <ScrollView style={[styles.container]}>
      <List>
        <FilterComponent />
      </List>
    </ScrollView>
  );

  return (
    <>
      <Drawer
        sidebar={sidebar}
        position="left"
        open={false}
        // drawerRef={onSetDrawer}
        // drawerRef={el => (drawer = el)}
        // onOpenChange={(isOpen) => onOpenChange(isOpen)}
        drawerBackgroundColor="#ccc">
        {children}
      </Drawer>
    </>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
