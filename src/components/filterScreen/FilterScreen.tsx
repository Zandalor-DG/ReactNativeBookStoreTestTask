import * as React from 'react';
import {Drawer} from 'react-native-paper';

const FilterScreen = () => {
  const [active, setActive] = React.useState('');

  return (
    <Drawer.Section
      accessibilityComponentType
      accessibilityTraits
      title="Some title">
      <Drawer.Item
        accessibilityComponentType
        accessibilityTraits
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        accessibilityComponentType
        accessibilityTraits
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
  );
};

export default FilterScreen;
