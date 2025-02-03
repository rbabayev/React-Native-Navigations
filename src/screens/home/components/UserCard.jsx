import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const UserCard = ({user, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 15,
          borderWidth: 1,
          borderColor: '#000000',
          borderRadius: 8,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>{user.name}</Text>
        <Text>{user.phone}</Text>
        <Text style={{fontWeight: '400', color: 'black'}}>{user.email}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;
