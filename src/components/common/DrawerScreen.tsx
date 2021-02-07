import {Drawer, List} from '@ant-design/react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FilterComponent from '../filterScreen/FilterComponent';

const DrawerScreen: React.FC<{}> = ({children}) => {
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
