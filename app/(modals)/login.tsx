import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import useWarmUpBrowser from '@/hooks/useWarmUpBrowser'
import styles from '../../constants/styles'
import { Ionicons } from '@expo/vector-icons'
import { useOAuth } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'

enum Strategy {
  Google = 'oauth_google',
  Apple = 'oauth_apple', 
  Facebook = 'oauth_facebook',
}
const login = () => {
  useWarmUpBrowser();
  const router = useRouter();
  const {startOAuthFlow : googleAuth} = useOAuth({strategy: 'oauth_google'});
  const {startOAuthFlow: appleAuth} = useOAuth({strategy: 'oauth_apple'});
  const {startOAuthFlow: facebookAuth} = useOAuth({strategy: 'oauth_facebook'});

  const onSelectAuth = async(strategy: Strategy) => {
    const selectedAuth = {
      [Strategy.Google]: googleAuth,
      [Strategy.Apple]: appleAuth,
      [Strategy.Facebook]: facebookAuth,
    }[strategy];

    try{
      const {createdSessionId, setActive} = await selectedAuth()
    
    if(createdSessionId){
      setActive!({sesssion: createdSessionId})
      router.back();
    }
  } catch(error){
    console.error
  }
  }
  return (
    <View style={styles.container}>
      <TextInput autoCapitalize='none' placeholder='Email' style={[styles.inputField, {marginBottom: 30}]}/>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.separatorView}>
        <View style={{
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: '#000',
          flex: 1,
        }} />
          <Text style={styles.separator}>or</Text>
          <View style={{
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: '#000',
          flex: 1,
        }} />
        
      </View>
      <View style={{gap:20}}>
        <TouchableOpacity style={styles.btnOutline} >
          <Ionicons name='call-outline' size={24} style={styles.btnIcon} />
          <Text style={styles.btnOutlineText}>Continue with Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline} onPress={() => onSelectAuth(Strategy.Google)}>
          <Ionicons name='logo-google' size={24} style={styles.btnIcon} />
          <Text style={styles.btnOutlineText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline} onPress={() => onSelectAuth(Strategy.Apple)}>
          <Ionicons name='logo-apple' size={24} style={styles.btnIcon} />
          <Text style={styles.btnOutlineText}>Continue with Apple</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btnOutline} onPress={() => onSelectAuth(Strategy.Facebook)}>
          <Ionicons name='logo-facebook' size={24} style={styles.btnIcon} />
          <Text style={styles.btnOutlineText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default login