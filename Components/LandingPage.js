import * as React from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function LandingPage ({navigation}) {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>Marvelapp!</Text>
      <TouchableOpacity
           onPress={() => navigation.navigate('Home')}
           style={styles.button} >
      <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
      <Image source={require('../assets/Marvel.jpg')} 
      style={styles.image}/>
      <StatusBar styles="auto" />
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
      title: {
        fontSize: 30,
        color: '#727A9A',
      },
      image: {
        height:200,
        width:200,
        padding:10,
      },
      button: {
        backgroundColor: 'red',
        padding: 7,
        marginTop:10,
        borderRadius:50,
      },
      buttonText: {
        color: '#fff',
        fontSize: 20,
      }
  });
  