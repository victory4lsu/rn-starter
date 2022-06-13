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
      <Button 
        onPress={() => {navigation.navigate('Counter')}}
        title="Go To Counter Demo"
      />
      <Button 
        onPress={() => {navigation.navigate('Color')}}
        title="Go To Colors Demo"
      />
      <Button 
        onPress={() => {navigation.navigate('Square')}}
        title="Go To Color Square Demo"
      />
      <Button 
        onPress={() => {navigation.navigate('Text')}}
        title="Go To Text Demo"
      />
      <Button
        onPress={()=> {navigation.navigate('Box')}}
        title='Go To Box Demo' 
      />
      <Button
        onPress={() => {navigation.navigate('Flex')}}
        title='Go To Flexbox Demo' 
      />
      <Button
        onPress={() => {navigation.navigate('MyLayout')}}
        title='Go To Layout Demo' 
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
