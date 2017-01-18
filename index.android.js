import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

class auth extends React.Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('auth', () => auth);
