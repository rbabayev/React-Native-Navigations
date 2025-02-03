import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

const UserDetails = ({route}) => {
  const route = useRoute();
  const {user} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.name}</Text>
      <Text>Username: {user.username}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Address:</Text>
      <Text>Street: {user.address.street}</Text>
      <Text>Suite: {user.address.suite}</Text>
      <Text>City: {user.address.city}</Text>
      <Text>Zipcode: {user.address.zipcode}</Text>
      <Text>Geo:</Text>
      <Text>Latitude: {user.address.geo.lat}</Text>
      <Text>Longitude: {user.address.geo.lng}</Text>
    </View>
  );
};

export default UserDetails;
