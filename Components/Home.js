import React from 'react'
import { useEffect, useState} from 'react';
import apiParams from '../config.js';
import axios from 'axios';
import {View, Button, FlatList, Text, StyleSheet, ActivityIndicator} from 'react-native'
import CharacterCard from './CharacterCard';
import { Searchbar } from 'react-native-paper';



export default function Home () {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;
  const [search, setSearch] = useState('');

    useEffect(() => {
    axios.get(`${baseURL}/v1/public/characters`, {
      params: {
        ts,
        apikey,
        hash
      }
    })
      .then(response => setData(response.data.data.results))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  function searchCharacter() {
  if(search) {
    setLoading(true);
    axios.get(`${baseURL}/v1/public/characters`, {
      params: {
        ts,
        apikey,
        hash,
        nameStartsWith: search
      }
    })
      .then(response => setData(response.data.data.results))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }
}

    return (
        <View style={styles.container}>
    {isLoading 
        ? <ActivityIndicator size="large" color="#00ff00" /> 
        : (
          <View >
          <Searchbar style={styles.input}
            placeholder="Search for character..."
            onChangeText={value => setSearch(value)}
            value={search}
            onIconPress={searchCharacter}
            onSubmitEditing={searchCharacter}
          />
          <FlatList 
            data={data}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <CharacterCard 
                id={item.id}
                image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`} 
                name={item.name} />
            )}
          />
          
          </View>
        )
      }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      padding:5,
      borderWidth:1,
      borderColor: "#bfc0c0",
      borderRadius: 50,
    },
   
  });