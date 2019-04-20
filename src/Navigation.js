import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
import Chat from './Pages/Chat';
import Setting from './Pages/Setting';
import RoomDetail from './Pages/RoomDetail';

const rightButtonImage = require('./Images/more.png');

const MoreButton = () => {
    return (
        <TouchableOpacity onPress={() => Actions.push('userCenter')}>
            <Image style={styles.more} source={rightButtonImage}/>
        </TouchableOpacity>
    );
}

const Navigation = () => (
    <Router>
        <Stack key="root" titleStyle={{ alignSelf: 'center' }}>
            <Scene key="chat" component={Chat} title="上车啦" renderRightButton={MoreButton} initial={true}/>
            <Scene key="userCenter" component={RoomDetail} title="聊天信息" backTitle="返回"/>
            <Scene key="setting" component={Setting} title="设置" backTitle="聊天信息"/>
        </Stack>
    </Router>
);

const styles = StyleSheet.create({
    more: {
        width: 25,
        height: 10,
        right: 10
    }
});

export default Navigation;
