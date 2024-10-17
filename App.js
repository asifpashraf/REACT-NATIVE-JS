import { View, Text,StyleSheet, TextInput,Image, Button,StatusBar, Platform} from 'react-native'
import React from 'react'


const App = () => {
  return (
    <View style={styles.container}>
      
      <Text>username</Text>
      <TextInput>username</TextInput>
      <Text>passwords</Text>
      <TextInput textContentType='password'>password</TextInput>
      <Button title=' register'/>
      <Image blurRadius={1} fadeDuration={2000} source={{width:200,
      height:300,
        uri:"https://picsum.photos/200/300"}}/>

      {/* <Button>"login"</Button> */}

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:'dodgerblue',
alignItems:"center",
// StatusBar:Platform
justifyContent:"center",
}
})

export default App