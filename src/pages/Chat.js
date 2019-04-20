import React, {PureComponent} from 'react';
import { Actions } from 'react-native-router-flux';
import { Realtime, TextMessage, Event } from 'leancloud-realtime';
import {
    StyleSheet,
    Text,
    StatusBar,
    View
} from 'react-native';
const realtime = new Realtime({
  appId: 'Y55AfFe9U5tg9xshCp4r5Bk9-gzGzoHsz',
  appKey: 'O2u3uLxlr9sDdDfrAHn85fvE',
});
// Jerry 登录
realtime.createIMClient('Jerry').then(function(jerry) {
  jerry.on(Event.MESSAGE, function(message, conversation) {
    console.log('Message received: ' + message.text);
  });
}).catch(console.error);

class Chat extends PureComponent {
    componentDidMount() {
        realtime.createIMClient('Tom').then(function(tom) {
          // 创建与Jerry之间的对话
          return tom.createConversation({
            members: ['Jerry'],
            name: 'Tom & Jerry',
            unique: true
          });
        }).then(function(conversation) {
          // 发送消息
          return conversation.send(new TextMessage('耗子，起床！'));
        }).then(function(message) {
          console.log('Tom & Jerry', '发送成功！');
        }).catch(console.error);
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
