import { Dimensions } from 'react-native';

var {height, width} = Dimensions.get('screen');

export const sizeOfTile = width / 4;
export const sizeOfBoard = sizeOfTile * 4;
