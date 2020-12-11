import React from 'react'
import { Button, View, TouchableOpacity } from 'react-native'

//Styling
import styles from './style'

export default function PrimaryButton(props) {
    const {
        container = {},
        onPress = () => { },
        touchAbleStyling = {},
        disabled = false,
        title = 'Abc',
        onClick = () => {},
        buttonStyling = {}
    } = props

    return <View style={[styles.mainContainer, container]} >
        <TouchableOpacity style={[styles.touchStyling, touchAbleStyling]} onPress={onPress} >
            <Button title={title} onPress={onClick} style={[styles.buttonContainer, buttonStyling]} disabled={disabled} />
        </TouchableOpacity>
    </View>
}