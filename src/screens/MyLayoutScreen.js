import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const MyLayoutScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={[styles.textStyle, styles.child1Style]}/>
            <View style={[styles.textStyle, styles.child2Style]}/>
            <View style={[styles.textStyle, styles.child3Style]}/>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row'
        , justifyContent: 'space-between'
    }
    , textStyle: {
        borderWidth: 3
        , padding: 5
        , textAlign: 'center'
        , height: 100
        , width: 100
    }
    ,child1Style:{
        backgroundColor: 'rgba(255,0,0,.25)'
        , borderColor: 'rgb(255,0,0)'
    }
    ,child2Style:{
        backgroundColor: 'rgba(0,255,0,.25)'
        , alignSelf: 'flex-end'
        , borderColor: 'rgb(0,255,0)'
    }
    ,child3Style:{
        backgroundColor: 'rgba(150,0,255,.25)'
        , borderColor: 'rgb(150,0,255)'
    }
});

export default MyLayoutScreen;