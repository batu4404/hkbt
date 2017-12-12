import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const BoardBackground = ({style, size, sizeOfTile}) => {
    let length = size*size;
    let list = new Array(length);
    for (let i = 0; i < length; i++) {
        list[i] = (
            <View 
                key={i+1}
                style={{
                    width: sizeOfTile,
                    height: sizeOfTile,
                    padding: 5,
                }}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'white', 
                }}
                >
                </View>
            </View>
        );
    }

    return (
        <View
            style={style}
        >
            <View
                style={{flex: 1, backgroundColor: 'skyblue', flexDirection: 'row', flexWrap: 'wrap'}}
            >
                {list}
            </View>
        </View>
    )
}

export default BoardBackground;