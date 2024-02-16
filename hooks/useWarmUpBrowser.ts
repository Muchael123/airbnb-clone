import * as WeBrowser from 'expo-web-browser'
import React, { useEffect } from 'react'

const useWarmUpBrowser = () => {
  return (
    useEffect(() => {
        void WeBrowser.warmUpAsync();
        return () => {
            void WeBrowser.coolDownAsync();
        }
    }, []));
}

export default useWarmUpBrowser