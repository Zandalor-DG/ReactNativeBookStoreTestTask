import React from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

interface Props {
  route: {
    params: {
      itemId: number;
      otherParam: string;
      user: string;
    };
  };
  navigation: any;
}

export const NavigationScreen: React.FC<Props> = ({
  navigation,
  route,
}: Props) => {
  const {itemId, otherParam, user} = route.params;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header />
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Navigation Page</Text>
            <Text style={styles.sectionTitle}>itemId: {itemId}</Text>
            <Text style={styles.sectionTitle}>otherParam: {otherParam}</Text>
            <Text style={styles.sectionTitle}>name: {user}</Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>See Your Changes</Text>
            <Text style={styles.sectionDescription}> Your Navigation </Text>
          </View>
          <View style={styles.buttonClick}>
            <Button
              title="Go to Navigation... again"
              onPress={() =>
                navigation.push('Navigation', {
                  itemId: Math.floor(Math.random() * 100),
                })
              }
            />
            <View style={styles.buttonClick}>
              <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
              />
            </View>
            <View style={styles.buttonClick}>
              <Button
                title="Go back Home"
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  buttonClick: {
    shadowRadius: 2,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default NavigationScreen;
