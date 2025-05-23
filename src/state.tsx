import React, {useState}  from'react';
import {View,Text,Button} from 'react-native';

export default function Counter(){
    const [count,setCount]=useState(0);
    const [decrement,setDecrement]=useState(10);
    return(
        <View style={{
            padding:50,
            backgroundColor:'red',
            alignContent:'center',
        }}>
        <Text>Count:{count}</Text>
        <Button title="Increase" onPress={() => setCount(count+1)}/>
        <Text>Decrement:{decrement}</Text>
        <Button title='Decrement' onPress={()=> setDecrement(decrement-1)}/>
        </View>
    );   
    
};
