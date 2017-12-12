import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import ZoomView from './ZoomView';
import * as config from '../config';

export default class Piece extends Component {
    state = {
        translateX: new Animated.Value(0),
        translateY: new Animated.Value(0),
        scale: new Animated.Value(0),
    }

    componentWillMount() {
        Animated.timing(
            this.state.scale,
            {
                toValue: 1,
                duration: 100,
            }
        ).start()
    }

    animate() {
        let transform = this.props.transform;
        if (!transform) {
            return;
        }
        
        if (transform.hasOwnProperty('translateX')) {
            Animated.timing(
                this.state.translateX,
                {
                    toValue: transform.translateX,
                    duration: 200,
                    easing: Easing.linear()
                }
            ).start();
        } else if (transform.hasOwnProperty('translateY')) {
            Animated.timing(
                this.state.translateY,
                {
                    toValue: transform.translateY,
                    duration: 200,
                    easing: Easing.linear()
                }
            ).start();
        }
    }

    transform(transform, onCompleteTransform) {
        if (!transform) {
            return;
        }
        
        if (transform.hasOwnProperty('translateX')) {
            Animated.timing(
                this.state.translateX,
                {
                    toValue: transform.translateX,
                    duration: 200,
                    easing: Easing.linear()
                }
            ).start(onCompleteTransform);
        } else if (transform.hasOwnProperty('translateY')) {
            Animated.timing(
                this.state.translateY,
                {
                    toValue: transform.translateY,
                    duration: 200,
                    easing: Easing.linear()
                }
            ).start(onCompleteTransform);
        }
    }

    componentDidUpdate() {
       // this.animate();
    }

    render() {
        let {translateX, translateY, scale} = this.state;

        this.animate();

        return (
            <Animated.View
                style={[
                    this.props.style,
                    {
                        transform: [
                            { translateX: translateX },
                            { translateY: translateY },
                            { scale: scale },
                        ]
                    }
                ]}
            >
                
                    <View style={styles.contentContainer}>
                        <Text style={styles.itemContent}>11</Text>
                    </View>
                
            </Animated.View>
        )
    }
}

const styles =  StyleSheet.create({
    itemContainer: {
        position: 'absolute',
        width: config.sizeOfTile,
        height: config.sizeOfTile,
        backgroundColor: 'transparent',
        // backgroundColor: 'yellow',
        // justifyContent: 'center',
    },
    contentContainer: {
        flex: 1,
        margin: 5,
        // width: sizeOfTile,
        // height: sizeOfTile,
        backgroundColor: 'yellow',
        justifyContent: 'center',
    },
    item: {
    },
    itemContent: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: config.sizeOfTile / 3,
        color: 'blue',
    }
})