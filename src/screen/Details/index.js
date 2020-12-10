import React from 'react'
import { View, Text } from 'react-native'

//Styling
import styles from './style'

function Details( props ){
    const { navigation } = props 
    console.warn("🚀 ~ file: index.js ~ line 9 ~ Details ~ props", props)
    return <View style={styles.mainContainer}>
        <Text>{ 'Detail Screen' }</Text>
    </View>
}

export default Details