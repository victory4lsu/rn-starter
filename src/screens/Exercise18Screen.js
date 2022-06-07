import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Exercise18Screen = () => {
    const userName = 'Jason Lawler';

    return (
        <View>
            <Text style={styles.headerText}>Getting started with React native!</Text>
            <Text style={styles.subHeaderStyle}>My name is {userName}</Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 45,
        color: 'red'
    },
    subHeaderStyle: {
        fontSize: 20,
        color: 'blue'
    }
});

export default Exercise18Screen;