import React,{useRef} from "react";
import { TextInput,Button,View } from "react-native";
export default function InputFocus(){
    const inputRef=useRef<TextInput>(null); 

     const foucsInput=()=>{
    inputRef.current?.focus();
};
return(
    
       <View style={{
        padding:4,
        margin:4,
        backgroundColor:'red',
       }}>
          <TextInput ref={inputRef} placeholder="Type here"/>
          <Button title="Focus Input" onPress={foucsInput}/>
        </View>
);
};
