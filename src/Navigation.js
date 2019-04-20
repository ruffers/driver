import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
import Chat from './Pages/Chat';
import Setting from './Pages/Setting';
import RoomDetail from './Pages/RoomDetail';
import Login from './Pages/Login';

const rightButtonImage = require('./Images/more.png');

const MoreButton = () => {
    return (
        <TouchableOpacity onPress={() => Actions.push('carInfo')}>
            <Image style={styles.more} source={rightButtonImage}/>
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
                titleStyle={styles.title}
                navigationBarStyle={styles.navBar}
                renderRightButton={MoreButton}/>
            <Scene
                key="carInfo"
                component={RoomDetail}
                backButtonTextStyle={styles.backButtonTextStyle}
                backButtonTintColor="#fff"
                title="车辆信息"
                titleStyle={styles.title}
                navigationBarStyle={styles.navBar}
                backTitle="返回"/>
            <Scene
                key="setting"
                component={Setting}
                backButtonTextStyle={styles.backButtonTextStyle}
                backButtonTintColor="#fff"
                title="设置"
                titleStyle={styles.title}
                navigationBarStyle={styles.navBar}
                backTitle="车辆信息"/>
        </Stack>
    </Router>
);

const styles = StyleSheet.create({
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
        width: 25,
        height: 10,
        right: 10
    }
});

export default Navigation;
