import React, { Component } from 'react';
import { Platform, StatusBar, View, Text, Dimensions, StyleSheet, Animated, Easing } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
// import TransformView from '../components/TransformView';
// import ZoomView from '../components/ZoomView';
import BoardBackground from '../components/BoardBackground';
import Piece from '../components/Piece';

var {height, width} = Dimensions.get('screen');
var sizeOfTile = width / 4;
var sizeOfBoard = sizeOfTile * 4;

let id = 1;

export default class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Hello',
            backgroundColor: '#fff',
            transform: {translateY: 0, translateX: 0},
            originPosition: {x: sizeOfTile, y: sizeOfTile},
            position: {x: sizeOfTile, y: sizeOfTile},
            test: null,
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

            // this.transformView.transform(transform, this.onCompleteTransform);

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

            // this.transformView.transform(transform, this.onCompleteTransform);

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

            // this.transformView.transform(transform, this.onCompleteTransform);

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

            // this.transformView.transform(transform, this.onCompleteTransform);

            this.setState({
                message: 'Swiped right!',
                position: nextPosition,
                transform: transform,
            });
        }
        // this.setState({message: 'Swiped right!', transform: {translateX: sizeOfTile}});
    }

    onCompleteTransform = () => {
        console.log("completed", this.state);
       
        this.setState({
            test: {
                x: this.state.position.x,
                y: this.state.position.y,
                id: id++,
            }
        })
    }
    
    render() {
        const config = {
            velocityThreshold: 0.0,
            directionalOffsetThreshold: 50,
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
                    <BoardBackground
                        sizeOfTile={sizeOfTile}
                        size={4}
                        style={
                            [styles.backgroundView]
                        }
                    />
                    
                    
                    <Piece
                        onCompleteTransform={this.onComplete}
                        ref={transformView => this.transformView = transformView}
                        style={{position: 'absolute',
                        width: sizeOfTile,
                        height: sizeOfTile, left: this.state.originPosition.x, top: this.state.originPosition.y}}
                        transform={this.state.transform}
                    />
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
                <View>
                    <Text>{'test: ' + JSON.stringify(this.state.test)}</Text>
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
    zoomContainerTest: {
        flex: 1,
        margin: 5,
        backgroundColor: 'gray',
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