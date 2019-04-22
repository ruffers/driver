import React, { PureComponent } from 'react';
import './src/Utils/Global';
import Navigation from './src/Navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './src/reducers';

const store = createStore(reducer);

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <Navigation></Navigation>
            </Provider>
        );
    }
}

export default App;
