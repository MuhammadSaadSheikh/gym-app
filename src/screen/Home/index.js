import React from 'react'
import { View, Text, Button } from 'react-native'

//Styling
import styles from './style'

//utils
// import { Navigaotr } from '../../utils'

//Constant
// const { navigate } = Navigaotr

const Home = ( props ) => {
    const { navigation : { navigate }, route } = props
    console.log("🚀 ~ file: index.js ~ line 15 ~ Home ~ route", route)
    // console.log("🚀 ~ file: index.js ~ line 9 ~ Home ~ navigation", navigation)
    return <View style={styles.mainContainer} >
        <Text> {'Home'} </Text>
        <Button title='Detail Screen' onPress={() => navigate('Details')}  />
    </View>
}

export default Home