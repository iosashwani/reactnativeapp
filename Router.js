import { Scene, Router, Stack } from 'react-native-router-flux';
import AppIntroScreen from './AppIntroScreen';
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
        >
        </Scene>
      </Stack>
    </Router>
  )
}
export default RouterComponent
