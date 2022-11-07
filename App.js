import React, { useState } from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  View, 
  Text,
  TouchableOpacity
} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter(counter + 1);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <TouchableOpacity onPress={ clickHandler } style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray',
    },
    text: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#03A9F4',
    },
    fab: { 
      position: 'absolute', 
      width: 56, 
      height: 56, 
      alignItems: 'center', 
      justifyContent: 'center', 
      right: 20, 
      bottom: 20, 
      backgroundColor: '#03A9F4', 
      borderRadius: 30, 
      elevation: 8 
    }, 
    fabIcon: { 
      fontSize: 40, 
      color: 'white' 
    }
});

export default App;