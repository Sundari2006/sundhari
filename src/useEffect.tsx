import React, {useState,useEffect} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
export default function Timer(){
    const[seconds,setSeconds]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setSeconds(s=>s+1);
        },1000);
        return ()=>clearInterval(interval);
    },[]);
    return (
        <View style={{
            alignItems:'center',
            backgroundColor:'grey',
            padding:60,

        }}>
            <Text>Seconds:{seconds}</Text>
            <TouchableOpacity onPress={()=> setSeconds(0)}>
            <Text>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}