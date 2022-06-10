import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
    // state: {counter: number}
    // action {type: 'increase_counter' || 'decrease_counter', payload: 1 || -1}
    const {type, payload} = action;
    
    switch (type)
    {
        case 'increase_counter':
            return {...state, counter: state.counter + payload};
        case 'decrease_counter':
            return {...state, counter: state.counter - payload};
        default:
            return state;
    } 
}
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0})

    return (
        <View>
            <Button
                title='Increase'
                onPress={()=> {
                    dispatch({type: 'increase_counter', payload: COUNTER_INCREMENT});
                }}
            />
            <Button
                title='Decrease'
                onPress={() =>{
                    dispatch({type: 'decrease_counter', payload: COUNTER_INCREMENT});
                }}
            />
            <Button
                title='Reset'
                onPress={() =>{
                    dispatch({type: 'decrease_counter', payload: state.counter});
                }}
            />
            <Text style={styles.counterTitle}>Current Count: {state.counter}</Text>
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