import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { FontAwesome5,FontAwesome6,Ionicons   } from '@expo/vector-icons';

export default function TabLayout() {

  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.primary,
    }}>
      <Tabs.Screen name='index' options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({color, size}) =>  <FontAwesome5 name="search" size={size} color={color} />
      }} />
      <Tabs.Screen name='WishList' options={{
        tabBarLabel: 'WishList',
        tabBarIcon: ({color, size}) =>  <FontAwesome5 name="heart" size={size} color={color} />
      }} />
      <Tabs.Screen name='trips' options={{
        tabBarLabel: 'Trips',
        tabBarIcon: ({color, size}) =>  <FontAwesome5 name="airbnb" size={size} color={color} />
      }} />
      <Tabs.Screen name='Inbox' options={{
        tabBarLabel: 'Inbox',
        tabBarIcon: ({color, size}) =>  <FontAwesome6 name="message" size={size} color={color} />
      }} />
      <Tabs.Screen name='Profile' options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) =>  <Ionicons name="person-circle-outline" size={size} color={color} />
      }} />
    </Tabs>
  );
}
