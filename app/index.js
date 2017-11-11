import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import Navigator from './Navigators';
import {configureStore} from './logic/configureStore';

export default class Main extends Component {
  constructor(props) {
    super(props);

    const {persistor, store} = configureStore();
    this.persistor = persistor;
    this.store = store;
  }

  store;
  persistor;

  render() {
    return (
      <PersistGate persistor={this.persistor}>
        <Provider store={this.store}>
          <Navigator />
        </Provider>
      </PersistGate>
    );
  }
}
