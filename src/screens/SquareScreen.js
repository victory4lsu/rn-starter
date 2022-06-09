import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
    const [red,   setRed]   = useState(0);
    const [green, setGreen] = useState(0);
    const [blue,  setBlue]  = useState(0);
    let COLOR_INCREMENT = 15;
    
    const setColor = (color, change) => {
        //color === 'red', 'green', 'blue'
        //change === COLOR_INCREMENT, (-1 * COLOR_INCREMENT)
        
        switch (color)
        {
            case 'red':
            {
                let postChange = red + change;
                (postChange > 255 || postChange < 0)
                    ? null
                    : setRed(postChange);

                return;
            }
            case 'green':
            {
                let postChange = green + change;
                (postChange > 255 || postChange < 0)
                    ? null
                    : setGreen(postChange);

                return;
            }
            case 'blue':
            {
                let postChange = blue + change;
                (postChange > 255 || postChange < 0)
                    ? null
                    : setBlue(postChange);

                return;
            }
            default: 
                return;
        }

    }

    return (
        <View>
            <Button title='Reset' onPress={()=>{
                setRed(0);
                setGreen(0);
                setBlue(0);
            }}/>
            <ColorCounter 
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                color='Red'   
                colorValue={red}/>
            <ColorCounter 
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
                color='Green'
                colorValue={green} />
            <ColorCounter 
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
                color='Blue'
                colorValue={blue}  />
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