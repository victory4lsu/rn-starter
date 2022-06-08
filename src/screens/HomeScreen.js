import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
 
  return (
    <View>
      <Text style={styles.text}>Hello Crunchies!!</Text>
      <Button 
        title="Go To Components Demo" 
        onPress={() => {navigation.navigate('Components')}}
      />
      <Button 
        onPress={() => {navigation.navigate('List')}}
        title="Go To List Demo"
      />
      <Button 
        onPress={() => {navigation.navigate('Image')}}
        title="Go To Image Demo"
      />
    </View>
    );
};



const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
