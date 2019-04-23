import {
    Platform,
    Dimensions,
    DeviceInfo,
    NativeModules
} from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;
const { height, width } = Dimensions.get('window');
const { PlatformConstants = {} } = NativeModules;
const { minor = 0 } = PlatformConstants.reactNativeVersion || {};
const basePx = 750;

export const px2dp = (px) => {
    return px / basePx * width;
};

export const isIphoneX = () => {
    if (Platform.OS === 'web') return false;
        if (minor >= 50) {
            return DeviceInfo.isIPhoneX_deprecated;
        }
        return (
            Platform.OS === 'ios' &&
            ((height === X_HEIGHT && width === X_WIDTH) ||
                (height === X_WIDTH && width === X_HEIGHT))
        );
}
