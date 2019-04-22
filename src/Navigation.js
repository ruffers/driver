import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
import Chat from './Pages/Chat/Chat';
import Setting from './Pages/Setting/Setting';
import RoomDetail from './Pages/RoomDetail/RoomDetail';
import Login from './Pages/Login/Login';

const MoreButton = () => {
    return (
        <TouchableOpacity onPress={() => Actions.push('carInfo')}>
            <Image style={stylesNavigation.more} source={Images.moreIcon}/>
        </TouchableOpacity>
    );
}

const Navigation = () => (
    <Router>
        <Stack key="root" titleStyle={{ alignSelf: 'center' }}>
            <Scene
                key="login"
                component={Login}
                hideNavBar={true}
                initial={true}/>
            <Scene
                key="chat"
                component={Chat}
                title="AE86"
                titleStyle={stylesNavigation.title}
                navigationBarStyle={stylesNavigation.navBar}
                renderRightButton={MoreButton}/>
            <Scene
                key="carInfo"
                component={RoomDetail}
                backButtonTextStyle={stylesNavigation.backButtonTextStyle}
                backButtonTintColor="#fff"
                title="车辆信息"
                titleStyle={stylesNavigation.title}
                navigationBarStyle={stylesNavigation.navBar}
                backTitle="返回"/>
            <Scene
                key="setting"
                component={Setting}
                backButtonTextStyle={stylesNavigation.backButtonTextStyle}
                backButtonTintColor="#fff"
                title="设置"
                titleStyle={stylesNavigation.title}
                navigationBarStyle={stylesNavigation.navBar}
                backTitle="车辆信息"/>
        </Stack>
    </Router>
);

const stylesNavigation = StyleSheet.create({
    navBar: {
        backgroundColor: '#323135'
    },
    title: {
        color: '#fff'
    },
    backButtonTextStyle: {
        color: '#fff'
    },
    more: {
        width: px2dp(44),
        height: px2dp(40),
        right: px2dp(28)
    }
});

export default Navigation;
