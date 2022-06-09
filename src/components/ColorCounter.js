import React, {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease, colorValue}) => {
    return (
        <View>
            <Text>{color} ({colorValue})</Text>
            <Button
                title={`increase ${color}`}
                onPress={()=> onIncrease()}
            />
            <Button
                title={`decrease ${color}`}
                onPress={() => onDecrease()} 
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;