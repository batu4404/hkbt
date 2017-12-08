import React, { Component } from 'react';
import { Platform, StatusBar, View, Text, Dimensions, StyleSheet, Animated, Easing } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

var {height, width} = Dimensions.get('screen');
var sizeOfTile = width / 4;
var sizeOfBoard = sizeOfTile * 4;

class TransformView extends Component {
    state = {
        translateX: new Animated.Value(0),
        translateY: new Animated.Value(0),
        scale: new Animated.Value(0),
    }

    componentWillMount() {
    }

    animate() {
        let transform = this.props.transform;
        
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

class ZoomView extends Component {
    state = {
        scale: new Animated.Value(0),
    }

    componentWillMount() {
        Animated.timing(
            this.state.scale,
            {
                toValue: 1,
                duration: 200,
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

const BackgroundView = ({style, size}) => {
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


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Hello',
            backgroundColor: '#fff',
            transform: {translateY: 0, translateX: 0},
            originPosition: {x: sizeOfTile, y: sizeOfTile},
            position: {x: sizeOfTile, y: sizeOfTile},
        };
    }

    calculateTransform(prevPosition, nextPosition, isX) {
        // if (prevPosition.x != nextPosition.x) {
        //     return {translateX: nextPosition.x-prevPosition.x};
        // } else if (prevPosition.y != nextPosition.y) {
        //     return {translateY: nextPosition.y-prevPosition.y};
        // }

        if (isX) {
            if (prevPosition.x != nextPosition.x) {
                return {translateX: nextPosition.x-prevPosition.x};
            }

            return {translateX: 0};
        } else {
            if (prevPosition.y != nextPosition.y) {
                return {translateY: nextPosition.y-prevPosition.y};
            }

            return {translateY: 0};
        }
    }

    onSwipeUp(gestureState) {
        let y = this.state.position.y;
        if (y >= sizeOfTile) {
            let nextPosition = {x: this.state.position.x, y: (y-sizeOfTile)};
            let transform = this.calculateTransform(this.state.originPosition, nextPosition, false);

            this.setState({
                message: 'Swiped up!',
                position: nextPosition,
                transform: transform,
            });
        }
        // this.setState({message: 'Swiped up!', transform: {translateY: -100}});
    }

    onSwipeDown(gestureState) {
        let y = this.state.position.y;
        if (y < 3*sizeOfTile) {
            let nextPosition = {x: this.state.position.x, y: (y+sizeOfTile)};
            let transform = this.calculateTransform(this.state.originPosition, nextPosition, false);

            this.setState({
                message: 'Swiped up!',
                position: nextPosition,
                transform: transform,
            });
        }
        // this.setState({message: 'Swiped down!', transform: {translateY: 100}});
    }

    onSwipeLeft(gestureState) {
        let x = this.state.position.x;
        if (x >= sizeOfTile) {
            let nextPosition = {x: (x-sizeOfTile), y: this.state.position.y};
            let transform = this.calculateTransform(this.state.originPosition, nextPosition, true);

            this.setState({
                message: 'Swiped left!',
                position: nextPosition,
                transform: transform,
            });
        }
        // this.setState({message: 'Swiped left!', transform: {translateX: -100}});
    }

    onSwipeRight(gestureState) {
        let x = this.state.position.x;
        if (x < 3*sizeOfTile) {
            let nextPosition = {x: (x+sizeOfTile), y: this.state.position.y};
            let transform = this.calculateTransform(this.state.originPosition, nextPosition, true);

            this.setState({
                message: 'Swiped right!',
                position: nextPosition,
                transform: transform,
            });
        }
        // this.setState({message: 'Swiped right!', transform: {translateX: sizeOfTile}});
    }
    
    render() {
        const config = {
            velocityThreshold: 0,
            directionalOffsetThreshold: 50
        };

        return (
            <View style={styles.container}>
                <GestureRecognizer
                    // onSwipe={(direction, state) => this.onSwipe(direction, state)}
                    onSwipeUp={(state) => this.onSwipeUp(state)}
                    onSwipeDown={(state) => this.onSwipeDown(state)}
                    onSwipeLeft={(state) => this.onSwipeLeft(state)}
                    onSwipeRight={(state) => this.onSwipeRight(state)}
                    config={config}
                    style={
                        [styles.SwipeContainer]
                    }
                >
                    <BackgroundView
                        size={4}
                        style={
                            [styles.backgroundView]
                        }
                    />
                    
                    
                    <TransformView
                        style={{position: 'absolute',
                        width: sizeOfTile,
                        height: sizeOfTile, left: this.state.originPosition.x, top: this.state.originPosition.y}}
                        transform={this.state.transform}
                    >
                        <ZoomView
                            style={styles.zoomContainer}
                        >
                            <View style={styles.item}>
                                <Text style={styles.itemContent}>1</Text>
                            </View>
                        </ZoomView>
                    </TransformView>
                    {/*}
                    <ZoomView
                        style={{backgroundColor: 'yellow', height: sizeOfTile, width: sizeOfTile, justifyContent: 'center', position: 'absolute', right: 0, top: sizeOfTile}}
                    >
                        <View style={styles.item}>
                            <Text style={styles.itemContent}>4</Text>
                        </View>
                    </ZoomView> 
                    */}
                    
                </GestureRecognizer>
                <View>
                    <Text>{this.state.message}</Text>
                </View>
                <View>
                    <Text>{JSON.stringify(this.state.transform)}</Text>
                </View>
                <View>
                    <Text>{'position: ' + JSON.stringify(this.state.position)}</Text>
                </View>
            </View>
        )
    }
}


const styles =  StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })

    },
    backgroundView:  {
        height: sizeOfBoard,
        width: sizeOfBoard,
    },
    SwipeContainer: {
        height: sizeOfBoard,
        width: sizeOfBoard,
    },
    itemContainer: {
        position: 'absolute',
        width: sizeOfTile,
        height: sizeOfTile,
        backgroundColor: 'transparent',
        // backgroundColor: 'yellow',
        // justifyContent: 'center',
    },
    zoomContainer: {
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
        fontSize: sizeOfTile / 3,
        color: 'blue',
    }
})