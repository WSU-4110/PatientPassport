import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Colors from '../config/Colors';

function AppTextButton({ width, name, onSubmit, height = 42, borderRadius = 25, backgroundColor = "black", buttonStyle, textStyle }) {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => onSubmit()} style={{ alignItems: "center", justifyContent: "center", backgroundColor, width, height, borderBottomEndRadius: borderRadius, borderBottomStartRadius: borderRadius, borderTopStartRadius: borderRadius, justifyContent: "center" }} >
            {
                name ?
                    <Text numberOfLines={1} style={{ color: "white", fontSize: 18, ...textStyle }} >{name}</Text>
                    : null
            }
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AppTextButton;