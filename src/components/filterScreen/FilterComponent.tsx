import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {List, Radio} from '@ant-design/react-native';
const RadioItem = Radio.RadioItem;

const FilterComponent = () => {
  // constructor() {
  //   super(...arguments);
  //   this.state = {
  //     part1Value: 1,
  //     part2Value: 1,
  //   };
  // }
  // render() {
  const [partValue, usePartVallue] = useState(1);

  return (
    <View>
      <List style={{marginTop: 12}}>
        <Text style={{marginTop: 12}}>Form radio, radio in general list.</Text>
        <RadioItem
          checked={partValue === 1}
          // onChange={(event) => {
          //   if (event.target.checked) {
          //     this.setState({part2Value: 1});
          //   }
          // }}
        >
          Use Ant Desgin Component
        </RadioItem>
        <RadioItem
          checked={partValue === 2}
          // onChange={(event) => {
          //   if (event.target.checked) {
          //     usePartVallue(2);
          //   }
          // }}
        >
          Use Ant Desgin Component
        </RadioItem>
        <RadioItem disabled>Set disabled</RadioItem>
        <RadioItem disabled checked>
          Set disabled
        </RadioItem>
      </List>
    </View>
  );
};

export default FilterComponent;
