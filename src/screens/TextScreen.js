import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import { shadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const TextScreen = () => {
    const [currentText, setText] = useState('');

    return (
        <View>
            <Text style={styles.textHeader}>Enter Password</Text>
            <TextInput 
                style={styles.textInput}
                value={currentText}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(newValue)=>{
                    setText(newValue);
                }}
            />
            {
                currentText.length >= 5
                ? null
                :<Text style={styles.textPasswordMessage}>The password must be at least 5 characters long.</Text>
            }
            
        </View>
    );
};

const styles = StyleSheet.create({
 textInput: {
     margin: 15,
     borderColor: 'cornflowerblue',
     borderWidth: 1,
     borderRadius: 3,
     height: 25
 },
 textDisplay: {
    margin: 15,
    color: 'cornflowerblue',
    fontWeight: '600'
 },
 textPasswordMessage: {
    marginLeft: 15,
    color: 'red',
    fontWeight: '700'
 },
 textHeader: {
    marginLeft: 15,
    fontSize: 25,
    fontWeight: '600'
 }
});

export default TextScreen;
