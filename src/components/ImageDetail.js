import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({imageSource, imageTitle, imageScore}) => {
    return (
        <View>
        <Image source={imageSource}/>
            <Text>{imageTitle}</Text>
            <Text>Image Score - {imageScore} of 10</Text>
        </View>
    );
}
const styles = StyleSheet.create({

});

export default ImageDetail;
