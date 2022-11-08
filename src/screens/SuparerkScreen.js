// Aboutscreen.js
import { View, Text, Image } from 'react-native';
import React from 'react'
import { TextInput ,Button } from 'react-native-paper'

const SuparerkScreen = () => {

    const [Username,setUsername]=React.useState("");
    const [Password,setPassword]=React.useState("");
  return (
    <View style={{height:'100%',alignItems:'center',backgroundColor:'black'}}>
      <View style={{flex:0.8,justifyContent:'center'}}>
        <Image source={ require('../assets/images/Arnoon.png') } style={{width:300,height:250}}></Image>
        </View><View style={{paddingTop:22,}}><Text style={{color:'yellow',fontSize:24}}>Suparerk Manothai</Text></View>

        <View style={  {paddingTop:20,paddingLeft:5,width:320,height:60}}>
                <TextInput  label='Username' value={Username}  onChangeText={Username => setUsername(Username)}/>  
        </View>
        <View style={  {paddingTop:30,paddingLeft:5,width:320,height:60}}>
            <TextInput  label='Password'
       //     secureTextEntry right={<TextInput.Icon icon='eye'/>}
          
            value={Password}  onChangeText={Password => setPassword(Password)}/>  
        </View>

       <View style={{paddingTop:22,}}><Text style={{color:'black',fontSize:24}}>.......</Text></View>


    <Button mode='contained'style={{width:320,height:40}} onPress={()=>console.log('Pressed')} >
 
     <Text style={{color:'yellow',fontSize:24}}>Log In</Text>
  
      </Button>
  
  
  
  
  </View> 


    
  )
}

export default SuparerkScreen