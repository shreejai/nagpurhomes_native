import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Profile = () => {
  const { id } = useLocalSearchParams();
  
  return (
    <View>
      <Text>Profile {id}</Text>
    </View>
  )
}

export default Profile