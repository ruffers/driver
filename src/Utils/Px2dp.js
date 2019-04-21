import {
    AsyncStorage,
    Platform,
    Dimensions
} from 'react-native';

let { height, width } = Dimensions.get('window');
let basePx = 750;

const px2dp = (px) => {
    return px / basePx * width;
}

export default px2dp;
