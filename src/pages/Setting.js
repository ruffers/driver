import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

class Setting extends PureComponent {
    render() {
        return (
            <Text style={styles.welcome}></Text>
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

export default Setting;
