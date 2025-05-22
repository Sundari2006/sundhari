import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import Audio from "./assert/download.mp3";


const audio = () => {
  return (
    <View>
      {/*<Audio>
        source={Audio}
        style={width:300,height=100}
      />*/}
     {/*<audio
        source={{'src/assert/download.mp3'}}
        style={{width:200,height:100}}
      />*/}
      <audio
      expo-av={{uri:'https://elements.envato.com/uplifting-epic-trailer-BG5V2DQ?utm_source=mixkit&utm_medium=referral&utm_campaign=elements_mixkit_cs_music_mood_31JULY2024'}}
      style={{width:100,height:50}}
      />
    </View>
  )
}

export default audio

const styles = StyleSheet.create({})