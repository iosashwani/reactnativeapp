import { Scene, Router, Stack } from 'react-native-router-flux';
import AppIntroScreen from './AppIntroScreen';
import LoginScreen from './src/login/LoginScreen'
import OtpScreen from './src/login/OtpScreen'
import React, { PureComponent } from 'react';

const RouterComponent = () => {
  console.log("hello");
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="splash"
          component={ AppIntroScreen }
          hideTabBar
          hideNavBar={true}
        />
        <Scene
          key="loginScreenKey"
          component={ LoginScreen }
          hideTabBar
          hideNavBar={true}
        />
        <Scene
          key="OtScreenKey"
          component={ OtpScreen }
          hideTabBar
          hideNavBar={true}
        />

      </Stack>
    </Router>
  )
}
export default RouterComponent
