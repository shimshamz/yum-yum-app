import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { Home, Cam, Favorites, Login } from "./src/screens";

const Main = createStackNavigator(
    {
        main: { screen: Home },
        favorites: { screen: Favorites }
    }
);

const Switch = createSwitchNavigator({
    login: Login,
    home: Main,
    camera: Cam
});

class App extends React.Component {
  render() {
    return <Switch />;
  }
}

export default App;