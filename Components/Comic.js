import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Comic({ name, image }) {
  return (
    <View style={styles.container}>
            <Image style={styles.image} source={{uri: image}} />
            <Text style={styles.title}>{name}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 300,
    backgroundColor: '#5bc0be',
    alignItems: 'center',
    borderRadius: 20,
    margin: 5,
  },
  image: {
    height: 250,
    width: 200,
    borderRadius: 20,
    margin: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white', 
    margin: 5,
  },
});
  