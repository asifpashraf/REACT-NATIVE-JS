// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userData = [{userName:"Asifa",userEmail:"asifpashraf@gmail.com",userPassword:'Logicmaster@1997'}]

  const handleSubmit = () => {
   if (name === userData.name) {
    Alert.alert("succesfully Registered");
   }
  //  Alert.alert('unsuccesful registeration')
   console.log(name);
   
   console.log(userData.name);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the future</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your Username"
        value={name}
        onChangeText={setName}
      />

      {/* <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      /> */}

      {/* <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      /> */}

      <View style={styles.lbut}>
      <Button title="Register" onPress={handleSubmit} />
      <Button  title="Login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  lbut:{
    flexDirection:'row',
    // width:9,
  },
});

export default Signup;
