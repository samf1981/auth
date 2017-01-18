import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

// redux/firebase
import { connect } from 'react-redux'
import { firebase, helpers } from 'react-redux-firebase'
const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers

const initialState = {firebase: { authError: null }}

const store = configureStore(initialState)

class App extends Component {

  render () {
    return (
      <Provider store={store}>
        <View>
          <Text>Test 123</Text>
        </View>
      </Provider>
    )
  }

}

export default App
