// Aboutscreen.js
import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';

const SanonScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.photo}
        source={require('../assets/images/rambo.png')}
      />
      <Text style={styles.name}>Sanon Kaewobchoey</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
    fontSize: 30,
  },
  photo: {
    padding: 20,
    marginTop: 15,
    width: 180,
    height: 200
  },
  name: {
    padding: 20,
    marginTop: 15,
    fontSize: 15,
  }
});

export default SanonScreen;