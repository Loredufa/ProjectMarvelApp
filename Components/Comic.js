import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Comic({ name, image }) {
  return (
    <View style={styles.container}>
    
			<Image
        style={styles.image}
				source={{uri: image}}
			/>
			<Text style={styles.font}>{name}</Text>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
     flexDirection: 'column',
      boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
      display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
    padding: 20,

    },
      font: {
        fontSize: 20,
        width: 200,           
        color: '#0a0908',
        padding: 10,
        justifyContent: 'center',
        textAlign: 'center',
      },
      image: {
        justifyContent: 'center',
        height:300,
        width:200,
        padding:10,
        alignItems: 'center',
      },    
  });
  