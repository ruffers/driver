import React, {PureComponent} from 'react';
import { Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import RoomDetailStyle from './RoomDetailStyle';

class RoomDetail extends PureComponent {
    render() {
        return (
            <View style={RoomDetailStyle.roomDetailWrap}>
                <TouchableOpacity onPress={() => Actions.push('setting')}>
                    <Text style={RoomDetailStyle.welcome}>设置</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

export default RoomDetail;
