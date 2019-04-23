import React, { PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput, Animated, Dimensions, Image } from 'react-native';
let { width } = Dimensions.get('window');
import LoginStyle from './LoginStyle';

class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.goRegister = this.goRegister.bind(this);
        this.registerSubmit = this.registerSubmit.bind(this);
        this.goLoginPage = this.goLoginPage.bind(this);
    }

    state = {
        disX: new Animated.Value(0)
    }

    login() {
        Actions.replace('chat');
    }

    goRegister() {
        Animated.timing(
            this.state.disX,
            {
                toValue: -width,
                duration: 300,
                useNativeDriver: true
            }
        ).start();
    }

    registerSubmit() {
        Animated.timing(
            this.state.disX,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }
        ).start();
    }

    goLoginPage() {
        Animated.timing(
            this.state.disX,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }
        ).start();
    }

    render() {
        return (
            <View style={LoginStyle.loginWrap}>
                <StatusBar barStyle="dark-content"/>
                <Animated.View style={[LoginStyle.loginSlider, {transform: [{translateX: this.state.disX}]}]}>
                    <View style={LoginStyle.pageItem}>
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
                            <View style={LoginStyle.registerEntry}>
                                <TouchableOpacity onPress={this.goRegister}>
                                    <Text style={LoginStyle.registerTxt}>注册账号</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={LoginStyle.loginBtnWrap}>
                                <TouchableOpacity activeOpacity={0.8} style={LoginStyle.loginBtn} onPress={this.login}>
                                    <Text style={LoginStyle.loginBtnTxt}>登录</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={LoginStyle.pageItem}>
                        <View style={LoginStyle.returnBtn}>
                            <TouchableOpacity activeOpacity={0.8} onPress={this.goLoginPage}>
                                <Image style={LoginStyle.return} source={Images.returnIcon}/>
                            </TouchableOpacity>
                        </View>
                        <View style={LoginStyle.loginContent}>
                            <View style={LoginStyle.loginTitleWrap}>
                                <Text style={LoginStyle.loginTitle}>注册</Text>
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
                                <View style={LoginStyle.inputItem}>
                                    <Text style={LoginStyle.label}>确认密码</Text>
                                    <TextInput style={LoginStyle.userName} selectionColor="#000" autoFocus={false} value=""/>
                                </View>
                                <View style={LoginStyle.inputItem}>
                                    <Text style={LoginStyle.label}>邀请码</Text>
                                    <TextInput style={LoginStyle.userName} selectionColor="#000" autoFocus={false} value=""/>
                                </View>
                            </View>
                            <View style={LoginStyle.registerEntry}>

                            </View>
                            <View style={LoginStyle.loginBtnWrap}>
                                <TouchableOpacity activeOpacity={0.8} style={LoginStyle.loginBtn} onPress={this.registerSubmit}>
                                    <Text style={LoginStyle.loginBtnTxt}>注册</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Animated.View>
            </View>
        );
    }
}

export default Login;
