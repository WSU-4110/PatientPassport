import React from 'react';
import { View, TextInput } from 'react-native';

import colors from "../config/Colors"

function AppTextInput({ style, borderWidth = 0, placeHolder, value, onChange, width = "100%", secure = false, editable = true, startEdit, endEdit }) {

    return (
        <View style={[{
            backgroundColor: colors.white, borderRadius: 10,
            width: width, alignItems: 'flex-start', justifyContent: 'center',
            borderWidth: borderWidth, borderColor: colors.MidnightBlue, height: 48
        }, style]}>
            <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }} >
                <TextInput style={{ color: "black", padding: 8, width: "90%", fontSize: 18 }}
                    placeholder={placeHolder}
                    placeholderTextColor={colors.grey}
                    value={value}
                    secureTextEntry={secure}
                    editable={editable}
                    onChangeText={(text) => onChange(text)}
                />
            </View>
        </View>
    );
}


export default AppTextInput;