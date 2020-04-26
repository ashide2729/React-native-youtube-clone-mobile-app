import React from 'react';
import {createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import SubscriptionScreen from './src/SubscriptionsScreen';
import ExploreScreen from './src/ExploreScreen';
import HomeScreen from './src/HomeScreen';
import InboxScreen from './src/InboxScreen';
import LibraryScreen from './src/LibraryScreen';

export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Explore: ExploreScreen,
    Subscriptions: SubscriptionScreen,
    Inbox: InboxScreen,
    Library: LibraryScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "home";
        if (routeName === "Library") {
          iconName = "folder";
        }
        switch (routeName) {
          case "Home":
            iconName = "home";
            break;
          case "Library":
            iconName = "library-video";
            break;
          case "Subscriptions":
            iconName = "youtube-subscription";
            break;
          case "Explore":
            iconName = "compass";
            break;
          case "Inbox":
            iconName = "email";
            break;  
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "#292929"
      }
    }
  }
);

const AppContainer = createAppContainer(bottomTabNavigator);


