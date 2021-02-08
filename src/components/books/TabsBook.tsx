import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Tabs} from '@ant-design/react-native';

interface ITabsBook {
  description?: string;
  language?: string;
  theYearOfPublish?: Date;
  numberPage?: number;
  price?: number;
}

const TabsBook: React.FC<ITabsBook> = ({
  description,
  language,
  numberPage,
  price,
  theYearOfPublish,
}) => {
  const tabs = [{title: 'First Tab'}, {title: 'Second Tab'}];

  return (
    <View style={styles.tabs__content}>
      <Tabs
        tabs={tabs}
        renderTabBar={(tabProps) => (
          <View style={styles.tabs__wrapper}>
            {tabProps.tabs.map((tab, i) => (
              // change the style to fit your needs
              <TouchableOpacity
                activeOpacity={0.9}
                key={tab.key || i}
                style={styles.tabs__button}
                onPress={() => {
                  const {goToTab, onTabClick} = tabProps;
                  // tslint:disable-next-line:no-unused-expression
                  onTabClick && onTabClick(tabs[i], i);
                  // tslint:disable-next-line:no-unused-expression
                  goToTab && goToTab(i);
                }}>
                <Text
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    color: tabProps.activeTab === i ? 'white' : 'grey',
                  }}>
                  {tab.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}>
        <View style={styles.tabs}>
          <Text style={styles.tabs__text}>{description}</Text>
        </View>
        <View style={styles.tabs}>
          <Text style={styles.tabs__text}>language: {language}</Text>
          <Text style={styles.tabs__text}>
            the year of publish{theYearOfPublish}
          </Text>
          <Text style={styles.tabs__text}>number page: {numberPage}</Text>
          <Text style={styles.tabs__text}>price: {price}</Text>
        </View>
      </Tabs>
    </View>
  );
};

// export const title = 'Tabs';
// export const description = 'Tabs example';

export default TabsBook;

const styles = StyleSheet.create({
  tabs: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  tabs__text: {
    flex: 1,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: '90%',
  },
  tabs__content: {flex: 1},
  tabs__wrapper: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tabs__button: {
    // width: '30%',
    padding: 6,
  },
  content__tabs: {backgroundColor: '#fff'},
});
