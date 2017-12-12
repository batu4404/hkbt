import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

export default class TransformView extends Component {
    state = {
        translateX: new Animated.Value(0),
        translateY: new Animated.Value(0),
        scale: new Animated.Value(0),
    }

    componentWillMount() {
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
        this.animate();
    }

    render() {
        let {translateX, translateY} = this.state;

        return (
            <Animated.View
                style={[
                    this.props.style,
                    {
                        transform: [{
                            translateX: translateX,
                        },
                        {
                            translateY: translateY,
                        }]
                    }
                ]}
            >
                {this.props.children}
            </Animated.View>
        )
    }
}