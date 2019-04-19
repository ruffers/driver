import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

class Chat extends PureComponent {
    render() {
        return (
            <Text style={styles.welcome}>聊天主界面</Text>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

export default Chat;
