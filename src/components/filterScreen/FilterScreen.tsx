import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Drawer, List, WhiteSpace} from '@ant-design/react-native';
import FilterComponent from './FilterComponent';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IFiletScreen {
  stylesMaterialIcons: {
    marginRight: number;
    color: string;
  };
}

const FilterScreen: React.FC<IFiletScreen> = ({stylesMaterialIcons}) => {
  const onOpenChange = (isOpen: boolean) => {
    console.log('Drawer', isOpen.toString());
  };
  let drawer: any;

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
        <TouchableOpacity onPress={() => drawer && drawer.openDrawer()}>
          <MaterialCommunityIcons
            name="filter"
            style={stylesMaterialIcons}
            size={26}
          />
        </TouchableOpacity>
        <WhiteSpace />
      </View>
    </Drawer>
  );
};

export default FilterScreen;

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
