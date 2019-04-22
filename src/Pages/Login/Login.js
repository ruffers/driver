import React, {PureComponent} from 'react';
import { Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import LoginStyle from './LoginStyle';

class Login extends PureComponent {
    login() {
        Actions.replace('chat');
    }

    render() {
        return (
            <View style={LoginStyle.loginWrap}>
                <StatusBar barStyle="dark-content"/>
                <View style={LoginStyle.loginSlider}>
                    <View style={LoginStyle.loginItem}>
                        <View style={LoginStyle.loginContent}>
                            <TouchableOpacity onPress={this.login}>
                                <Text style={LoginStyle.welcome}>登录</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Login;
