import { StyleSheet, Text, View, Flat, FlatList } from "react-native";
import React from "react";

const SearchFilter = ({data, searchInput, setSearchInput}) => {
  return (
    <View>

        <Text>Search results!</Text>

        <FlatList data={data} renderItem={({item}) => {
        
            if(searchInput === ""){
                return (
                    <View>
                        <Text>{item.name}, {item.icon}, {item.content}</Text>
                    </View>
                )
            }

            if(item.name.toLowerCase().includes(searchInput.toLowerCase())){
                return (
                    <View>
                        <Text>{item.name}, {item.icon}, {item.content}</Text>
                    </View>
                )
            }
    
        }}

        />


    </View>
  )
}

export default SearchFilter