import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import SettingStyle from './SettingStyle';

class Setting extends PureComponent {
    render() {
        return (
            <Text style={SettingStyle.welcome}></Text>
        );
    }
}

export default Setting;
