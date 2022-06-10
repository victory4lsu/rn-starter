import React, {useReducer} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    //state: === {red: number, green: number, blue: number}
    //action === {type: 'change_red'||'change_green'||'change_blue', payload: 15||-15}
    
    let actionType = action.type;
    let amount = action.payload;
    
    switch (actionType)
    {
        case 'change_red':
            return state.red + amount > 255 || state.red + amount < 0
                ? state
                : {...state, red: state.red + amount};
        case 'change_green':
            return state.green + amount > 255 || state.green + amount < 0
                ? state
                : {...state, green: state.green + amount};
        case 'change_blue':
            return state.blue + amount > 255 || state.blue + amount < 0
                ? state
                : {...state, blue: state.blue + amount};
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;

    return (
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
                color='Red'   
                colorValue={state.red}/>
            <ColorCounter 
                onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
                color='Green'
                colorValue={state.green} />
            <ColorCounter 
                onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
                color='Blue'
                colorValue={state.blue}  />
            <View style={{
                height: 150, 
                width: 150, 
                backgroundColor: `rgb(${red},${green},${blue})`}}></View>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default SquareScreen;