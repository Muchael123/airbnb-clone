import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'

const index = () => {
  return (
    <View style={{flex:1, paddingTop:20}}>
      <Stack.Screen  options={{
        header: () => <ExploreHeader/>,
      }}/>
      <Listings/>
    </View>
  )
}

export default index