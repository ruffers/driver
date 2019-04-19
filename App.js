import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/Navigation';

class App extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Navigation/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

export default App;
