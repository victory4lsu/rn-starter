import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
    return <Text style={styles.textStyle}>This is the components screen</Text>;
};

const styles = StyleSheet.create ({
    textStyle: {
        fontSize: 30,
        color: 'gold',
        backgroundColor: 'black',
        height: '100%'
    }
});

export default ComponentsScreen;