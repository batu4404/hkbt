import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

export default class ZoomView extends Component {
    state = {
        scale: new Animated.Value(0.2),
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

    render() {
        return (
            <Animated.View
                style={[
                    this.props.style,
                    {
                        transform: [
                            {scale: this.state.scale},
                        ]
                    }
                ]}
            >
                {this.props.children}
            </Animated.View>
        )
    }
}
