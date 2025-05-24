
import React,{useState} from 'react'
import { Button, TextInput,View,Text,Alert,StyleSheet } from 'react-native'
import welcome from './welcome';
export default  function  Loginscreen(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleLogin=()=>{
  
  };
  
  return(
    <View>
      <Text style={{
         height:30,
         textAlign:'center',
      }}> Welcome to Login</Text>
      <TextInput
      placeholder='Email'
      value={email}
      onChangeText={setEmail}
      keyboardType='email-address'
      autoCapitalize='none'
/>
   <TextInput
   placeholder='Password'
   value={password}
   onChangeText={setPassword}
   secureTextEntry
   />
   <Button title='Login'onPress={handleLogin}/>
      </View> 
  );
};
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:40,
    alignItems:'center',
  },
  title:{
    fontSize:35,
    fontWeight:'bold',
    marginBottom:40,
    textAlign:'center',
  },
  input:{
    width:100,
    maxWidth:300,
    height:60,
    borderColor:'black',
    borderWidth:4,
    marginBottom:30,
    borderRadius:3,marginVertical:10
  },
})