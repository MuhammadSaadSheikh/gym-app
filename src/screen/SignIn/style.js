import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nestedWrapper:{
        width: '80%',
        height: 380,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderWidth: 0.1,
        borderRadius: 5,
        paddingHorizontal: 20,
        marginTop: -50
    },
    styling : {
        fontSize: 40,
        paddingVertical: 40
    },
    containerStyling: {
        height: 55,
        borderRadius: 5,
        marginBottom: 20,
    },
    forgetText:{
        fontSize: 10
    }
})

export default styles