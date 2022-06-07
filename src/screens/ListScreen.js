import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
/*
    // another option
    let friends = [
        {key: 'f1',  name: 'Friend #1'},
        {key: 'f2',  name: 'Friend #2'},
        {key: 'f3',  name: 'Friend #3'},
        {key: 'f4',  name: 'Friend #4'},
        {key: 'f5',  name: 'Friend #5'},
        {key: 'f6',  name: 'Friend #6'},
        {key: 'f7',  name: 'Friend #7'},
        {key: 'f8',  name: 'Friend #8'},
        {key: 'f9',  name: 'Friend #9'},
        {key: 'f10', name: 'Friend #10'},
    ];

    return (
        <FlatList 
            keyExtractor={(friend) => friend.name}
            data={friends2} 
            renderItem={({item}) => {
                return <Text>{item.name}</Text>
            }}
        />
    );
*/

    let friends = [
        {name: 'Friend #1'},
        {name: 'Friend #2'},
        {name: 'Friend #3'},
        {name: 'Friend #4'},
        {name: 'Friend #5'},
        {name: 'Friend #6'},
        {name: 'Friend #7'},
        {name: 'Friend #8'},
        {name: 'Friend #9'},
        {name: 'Friend #10'},
    ];

    return (
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
textStyle: {
    marginVertical: 25,
    borderWidth: 1,
    borderColor: 'green',
    padding: 15,
    height: 50
}
});

export default ListScreen;