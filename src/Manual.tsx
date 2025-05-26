import React  from "react";
import {View,Text,Button} from "react-native";
import useCounterReducer from './useCounterReducer';

export default function Counter(){
    const{count,increment,decrement,reset}=useCounterReducer(0);
return (
    <View>
        <Text>Count:{count}</Text>
        <Button title="Increase" onPress={increment}/>
        <Button title="Decrease" onPress={decrement}/>
        <Button title="Reset" onPress={reset}/>
    </View>
)
}