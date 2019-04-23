import React, { PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput } from 'react-native';
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
                            <View style={LoginStyle.loginTitleWrap}>
                                <Text style={LoginStyle.loginTitle}>登录</Text>
                            </View>
                            <View style={LoginStyle.inputs}>
                                <View style={LoginStyle.inputItem}>
                                    <Text style={LoginStyle.label}>账号</Text>
                                    <TextInput style={LoginStyle.userName} selectionColor="#000" autoFocus={false} value=""/>
                                </View>
                                <View style={LoginStyle.inputItem}>
                                    <Text style={LoginStyle.label}>密码</Text>
                                    <TextInput style={LoginStyle.userName} selectionColor="#000" autoFocus={false} value=""/>
                                </View>
                            </View>
                            <View style={LoginStyle.loginBtnWrap}>
                                <View style={LoginStyle.loginBtn}>
                                    <TouchableOpacity onPress={this.login}>
                                        <Text style={LoginStyle.loginBtnTxt}>登录</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Login;
