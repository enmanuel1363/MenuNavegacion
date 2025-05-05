import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AntDesign from '@expo/vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';

import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';


import Setting from './Screen/Setting';
import Home from './Screen/Home';
import Users from './Screen/Users';
import DetailHome from './Screen/DetailHome';
import AnotherDatailsHome from './Screen/AnotherDatailsHome';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: 'purple',
            }}
        >
            <Tab.Screen name="Home" component={StackDetailHome}
                options={{
                    tabBarLabel: 'HomeScreen',
                    tabBarIcon: ({color, size }) => (
                        <AntDesign name="home" size={24} color="black" />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen name="Drawer" 
            component={DrawerNavigate}
                options={{
                    tabBarIcon:({color, size})=>(
                        <AntDesign name="user" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Setting" 
            component={Setting}
                options={{
                    tabBarLabel: 'Setting',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="setting" size={24} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navegacion() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}

const Drawer = createDrawerNavigator();
function DrawerNavigate(){
    return(
        <Drawer.Navigator initialRouteName='Users'>
            <Drawer.Screen name="Users" component={Users}/>
            <Drawer.Screen name="DetailHome" component={DetailHome}/>
            <Drawer.Screen name="OtroDetalle" component={AnotherDatailsHome}/>
        </Drawer.Navigator>
    )
}

const DetailHomeNavigator = createStackNavigator();
function StackDetailHome() {
    return (
<DetailHomeNavigator.Navigator
initialRouteName='Home'>
    <DetailHomeNavigator.Screen
    name="Home"
    component={Home}>
    </DetailHomeNavigator.Screen>
    <DetailHomeNavigator.Screen
    name="DetailHome"
    component={DetailHome}>
    </DetailHomeNavigator.Screen>
    <DetailHomeNavigator.Screen
    name="AnotherDatailsHome"
    component={AnotherDatailsHome}>
    </DetailHomeNavigator.Screen>
</DetailHomeNavigator.Navigator>
    )
}