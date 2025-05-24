import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
//import Image from './asset/download.png';

const img = () => {
  return (
    <View>
      <Image
      source={require('./asset/download.png')}
      style={{height:150,width:150,padding:50,alignItems:'center',justifyContent:'center',margin:100}}
      />
    </View>
  )
}

export default img

const styles = StyleSheet.create({})