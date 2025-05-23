import { StyleSheet, Text, View,Dimensions } from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Play Local Video</Text>
      <Video 
       source={require('./asset/video.mp4')}
       style={styles.video}
       controls
       resizeMode="contain"
       paused={true}
     />
</View>
);
};
const {width}=Dimensions.get('window');

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'grey',
        justifyContent:'center',
        alignItems:'center',
        padding:15,

    },
    title:{
        color:'blue',
        fontSize:10,
        fontWeight:'bold',
        marginBottom:12,
    },
    video:{
        width:width -32,
        height:(width -32) 
    },
});
export default VideoPlayer;
