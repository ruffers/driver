import React, {PureComponent} from 'react';
import { Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    Text,
    StatusBar,
    View
} from 'react-native';

class Chat extends PureComponent {
    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.chatWrap}>
                <StatusBar barStyle="light-content"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    chatWrap: {
        flex: 1,
        backgroundColor: '#ebebeb'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

export default Chat;
