import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Drawer, List, WhiteSpace} from '@ant-design/react-native';
import FilterComponent from './FilterComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperButton: {flex: 1, marginTop: 114, padding: 8},
});

const FilterScreen = () => {
  const onOpenChange = (isOpen: boolean) => {
    console.log('Drawer', isOpen.toString());
  };
  let drawer: any;

  // const itemArr = Array.apply(null, Array(20))
  //   .map(function (_, i) {
  //     return i;
  //   })
  //   .map((_i, index) => {
  //     if (index === 0) {
  //       return (
  //         <List.Item
  //           key={index}
  //           thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
  //           multipleLine>
  //           <View style={styles.firstElement}>
  //             <Text>Categories - {index}</Text>
  //             <Button
  //               type="primary"
  //               size="small"
  //               onPress={() => drawer.closeDrawer()}>
  //               close drawer
  //             </Button>
  //           </View>
  //         </List.Item>
  //       );
  //     }
  //     return (
  //       <List.Item
  //         key={index}
  //         thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png">
  //         <Text>Categories - {index}</Text>
  //       </List.Item>
  //     );
  //   });
  // Todo: https://github.com/DefinitelyTyped/DefinitelyTyped
  const sidebar = (
    <ScrollView style={[styles.container]}>
      <List>
        <FilterComponent />
      </List>
    </ScrollView>
  );
  return (
    <Drawer
      sidebar={sidebar}
      position="left"
      open={false}
      drawerRef={(el) => (drawer = el)}
      onOpenChange={onOpenChange}
      drawerBackgroundColor="#ccc">
      <View style={styles.wrapperButton}>
        <Button onPress={() => drawer && drawer.openDrawer()}>
          Open drawer
        </Button>
        <WhiteSpace />
      </View>
    </Drawer>
  );
};

export default FilterScreen;
