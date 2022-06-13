import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const FlexScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={[styles.textStyle, styles.child1Style]}>Flexbox Child 1</Text>
            <Text style={[styles.textStyle, styles.child2Style]}>Flexbox Child 2</Text>
            <Text style={[styles.textStyle, styles.child3Style]}>Flexbox Child 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200
    }
    , textStyle: {
        borderWidth: 3,
        borderColor: 'red',
        padding: 5,
        textAlign: 'center'
    }
    ,child1Style:{
        backgroundColor: 'rgba(255,0,0,.25)'
    }
    ,child2Style:{
        backgroundColor: 'rgba(0,255,0,.25)'
        , left: 10
        , ...StyleSheet.absoluteFillObject
    }
    ,child3Style:{
        backgroundColor: 'rgba(0,0,255,.25)'
    }
});

export default FlexScreen;