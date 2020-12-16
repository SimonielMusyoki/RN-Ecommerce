import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../constants';
import { Home } from '../screens';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {    

    return (
        <Tab.Navigator 
            initialRouteName="Home"
            activeColor={COLORS.white}
            barStyle={{
                backgroundColor: COLORS.primary
            }}
            style={{
                backgroundColor: "white"
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon:({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen
                name="Categories"
                component={Home}
                options={{
                    tabBarLabel: "Categories",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen 
                name="Account"
                component={Home}
                options={{
                    tabBarLabel: "Account",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen 
                name="Cart"
                component={Home}
                options={{
                    tabBarLabel: "Cart",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={26} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;