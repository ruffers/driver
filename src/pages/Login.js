import React, {PureComponent} from 'react';
import { Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity
} from 'react-native';

class Login extends PureComponent {
    login() {
        Actions.replace('chat');
    }

    render() {
        return (
            <View style={styles.loginWrap}>
                <StatusBar barStyle="dark-content"/>
                <View style={styles.loginSlider}>
                    <View style={styles.loginItem}>
                        <View style={styles.loginContent}>
                            <TouchableOpacity onPress={this.login}>
                                <Text style={styles.welcome}>登录</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginWrap: {
        flex: 1,
        backgroundColor: '#f3f3f3'
    },
    loginSlider: {
        flex: 1
    },
    loginItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginContent: {

    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: '#000'
    }
});

export default Login;
