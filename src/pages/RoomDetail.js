import React, {PureComponent} from 'react';
import { Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

class RoomDetail extends PureComponent {
    render() {
        return (
            <View style={styles.roomDetailWrap}>
                <TouchableOpacity onPress={() => Actions.push('setting')}>
                    <Text style={styles.welcome}>设置</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    roomDetailWrap: {
        flex: 1,
        backgroundColor: '#efeff4'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

export default RoomDetail;
