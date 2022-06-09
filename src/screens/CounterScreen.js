import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button
                title='Increase'
                onPress={()=> {
                    setCounter(counter + 1);
                }}
            />
            <Button
                title='Decrease'
                onPress={() =>{
                    setCounter(counter - 1);
                }}
            />
            <Button
                title='Reset'
                onPress={() =>{
                    setCounter(0);
                }}
            />
            <Text style={styles.counterTitle}>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    counterTitle: {
        width: '100%',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        backgroundColor: 'blue',
        color: 'white'
    }
});

export default CounterScreen;