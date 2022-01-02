import React from 'react'
import {View, Button, Text, StyleSheet, Image} from 'react-native';


export default function Information({ image, name, description }) {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={{uri: image}}
      />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      Flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

      
    },
    image: {
        height:200,
        width:200,
        padding:10,
    },
      title: {
        fontSize: 30,
        color: '#727A9A',
      },
      description: {
        fontSize: 20,
        color: '#0a0908',
        padding:5,
      }
  });