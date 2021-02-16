import React from 'react';
import ChangeAvatarUser from './ChangeAvatarUser';
import ChangeDataUser from './ChangeDataUser';
import {ScrollView} from 'react-native-gesture-handler';

const ProfileScreen: React.FC = () => {
  return (
    <ScrollView>
      <ChangeAvatarUser />
      <ChangeDataUser />
    </ScrollView>
  );
};

export default ProfileScreen;
