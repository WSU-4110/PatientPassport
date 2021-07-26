/* This is the file that will contain the search bar */
//import proper components from react
import { midnightblue } from 'color-name';
import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import Colors from './config/Colors.js';

//create the searchbar function
const searchBar = () => {
    return (
        <View style = {styles.containter} >
            <TextInput placeholder = 'Search Here...'/>
        </View>
    )
};

//create the styles object
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50, 
        backgroundColor: "white", 
        borderRadius: 8
    },

    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16,
        fontFamily: 'times new roman'
    }
});

export default searchBar;