import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';

const ColorScreen = () => {
    const [colors, setColor] = useState([]);

    return (
        <View>
            <Button
                title='Add a Color'
                onPress={() => {
                    setColor([...colors, randomRgb()]);
                }}
            />
            <Button
                title='Clear All Colors'
                onPress={() => {
                    setColor([]);
                }}
            />
            <FlatList
                data={colors}
                keyExtractor={(item) => item}
                renderItem={({item}) => {
                    return <View style={{ marginRight: 25, height: 100, width: 100, backgroundColor: item}}/>

                }}/>
        </View>
    );
};

const randomRgb = () =>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}

const styles = StyleSheet.create({

});

export default ColorScreen;