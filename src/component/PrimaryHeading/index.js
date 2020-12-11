import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

//Styling
import styles from './style'

export default function PrimaryHeading(props) {
    const {
        container = {},
        onTouch = () => { },
        onPress = () => { },
        styling = {},
        heading = 'Hello'
    } = props

    return <View style={[styles.mainContainer, container]} >
        <TouchableOpacity onPress={onTouch} >
            <Text style={[styles.textStyling, styling]} > {heading} </Text>
        </TouchableOpacity>
    </View>
}