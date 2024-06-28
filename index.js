/**
 * @format
 */

import { AppRegistry, View, Image, Text, Platform, StyleSheet } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './src/screens/AuthFlow/WelcomeScreen';
import SignInScreen from './src/screens/AuthFlow/SignInScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import FavoriteScreen from './src/screens/Home/FavriouteScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import ActivityDetailsScreen from './src/screens/Home/ActivityDetailsScreen'
import LocationScreen from './src/screens/Location/LocationScreen'
import CustomTabBarButton from './src/components/CustomTabBarButton';
import PaymentMethodScreen from './src/screens/Profile/PaymentMethodScreen';
import AddCardScreen from './src/screens/Profile/AddCardScreen';
import ComplainScreen from './src/screens/Profile/ComplainScreen';
import HistoryScreen from './src/screens/Profile/HistoryScreen';
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()




export default class AppContainer extends React.Component {


    StackNavigation = () => (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='App' component={App} />
            <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
            <Stack.Screen name='SignInScreen' component={SignInScreen} />
            <Stack.Screen name='TabNavigaton' component={this.TabNavigaton} />
            <Stack.Screen name='ActivityDetailsScreen' component={ActivityDetailsScreen} />
            <Stack.Screen name='LocationScreen' component={LocationScreen} />
            <Stack.Screen name='PaymentMethodScreen' component={PaymentMethodScreen} />
            <Stack.Screen name='ComplainScreen' component={ComplainScreen} />
            <Stack.Screen name='HistoryScreen' component={HistoryScreen} />
            <Stack.Screen name='AddCardScreen' component={AddCardScreen} />


        </Stack.Navigator>
    )

    TabNavigaton = () => (
        <Tab.Navigator

            screenOptions={{
                headerShown: false,

                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,

                tabBarInactiveTintColor: "gray",
                tabBarLabelStyle:
                {
                    fontWeight: 'bold',
                    marginBottom: Platform.OS === 'ios' ? 0 : 20
                }
            }}
        >
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
                tabBarLabel: 'Home',

                tabBarIcon: ({ focused, tintColor }) => {
                    return (
                        <View style={{ position: 'absolute', top: 13.50 }}>
                            <Image style={{ height: 30, width: 30 }} resizeMode={'contain'} source={focused ? require('./src/assets/images/home.png') : require('./src/assets/images/inactiveHome.png')} />
                            {/* <Image style={{ height: 30, width: 30 ,alignSelf:'center'}} resizeMode={'cover'} source={ require('./src/assets/images/home.png')} /> */}
                        </View>
                    )
                },
            }} />


            <Tab.Screen name='FavoriteScreen' component={FavoriteScreen} options={{
                tabBarLabel: 'Favorite',

                tabBarIcon: ({ focused, tintColor }) => {
                    return (
                        <View style={{ position: 'absolute', top: 13.50 }}>
                            <Image style={{ height: 30, width: 30 }} resizeMode={'contain'} source={focused ? require('./src/assets/images/love.png') : require('./src/assets/images/like.png')} />
                            {/* <Image style={{ height: 30, width: 30 }} resizeMode={'contain'} source={ require('./src/assets/images/love.png')} /> */}
                        </View>
                    )
                },
            }} />
            <Tab.Screen name='ProfileScreen' component={ProfileScreen} options={{
                tabBarLabel: 'profile',

                tabBarIcon: ({ focused, tintColor }) => {
                    return (
                        <View style={{ position: 'absolute', top: 13.50 }}>
                            <Image style={{ height: 30, width: 30 }} resizeMode={'contain'} source={focused ? require('./src/assets/images/male.png') : require('./src/assets/images/profile.png')} />
                            {/* <Image style={{ height: 30, width: 25 }} resizeMode={'contain'} source={ require('./src/assets/images/male.png')} /> */}
                        </View>
                    )
                },
            }} />
        </Tab.Navigator>
    )



    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='StackNavigation' component={this.StackNavigation} />
                </Stack.Navigator>
            </NavigationContainer>
            // <AddCardScreen />

        )
    }
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 60,
        position: 'absolute',
        elevation: 5,
        shadowColor: 'grey',
        shadowOffset: { height: 5 },
        shadowOpacity: 1.0,
        shadowRadius: 7,
        right: 30,
        left: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        bottom: 25,


        // position: 'absolute',
        // backgroundColor: "white",
        // borderWidth: 0,
        //  borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        // bottom: 5,
        // right: 10,
        // left: 10,
        // height: 50,
    }
})
AppRegistry.registerComponent(appName, () => AppContainer);