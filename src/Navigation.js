import React, { PureComponent } from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import Chat from './pages/Chat';

class Navigation extends PureComponent {
    render() {
        return (
            <NativeRouter>
                <Route exact path="/" component={Chat} />
            </NativeRouter>
        );
    }
}

module.exports = Navigation;
