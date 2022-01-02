import * as React from 'react';
import { Text, View,  Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CharacterCard({image, name, id}) {
	const navigation = useNavigation();
  return (
    <TouchableOpacity 
			style={styles.container}
			onPress={() => navigation.navigate('Detail', {id})}
	>
    <View style={styles.box}>
			<Image 
				style={styles.image}
				source={image}
			/>
      <Text style={styles.font}>{name}</Text>
    </View>
    </TouchableOpacity>
  );
}

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#feeafa',
      padding:1,        
    },
      box: {
        flex:1,
        backgroundColor:'#d6cfcb',
        flexDirection: "row",
        padding: 5,
        borderRadius:50,
        minWidth: "100%",
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',  
         

      },
      font: {
        fontSize: 20,
        color: '#0a0908',
        padding:5,
      },
      image: {
        height:30,
        width:30,
        padding:5,
      }
  });
  