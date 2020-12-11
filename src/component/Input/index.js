import React from 'react'
import { TextInput, View, TouchableOpacity } from 'react-native'

//Styling
import styles from './style'

export default function Input(props) {
    const {
        container = {},
        onPress = () => { },
        touchAbleStyling = {},
        onChangeText = () => { },
        textStyling = {},
        placeholder = 'abc',
        value
    } = props

    return <View style={[styles.mainContainer, container]} >
        <TouchableOpacity style={[styles.touchStyling, touchAbleStyling]} onPress={onPress} >
            <TextInput value={value} style={[styles.inputStyling, textStyling]} onChangeText={onChangeText} placeholder={placeholder} />
        </TouchableOpacity>
    </View>
}