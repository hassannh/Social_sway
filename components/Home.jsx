import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { DATA } from '../Data/usersData';



export default function Home() {

  

    return (
        <FlatList
      data={DATA}      
      renderItem={({item}) => (
        <TouchableOpacity >
            <Image source={{uri: item.img}} style={{width: 330, height: 350 ,margin:15}} />
          <Text style={{marginLeft:15}}>{item.name}</Text>
        </TouchableOpacity>
      )
      }
    />
    )
}