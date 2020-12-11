import React, { useState } from 'react'
import { View } from 'react-native'

//Styling
import styles from './style'

//Component
import { Input, PrimaryHeading, PrimaryButton } from '../../component'

function SignIn(props) {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    return <View style={styles.mainWrapper} >
        <View style={styles.nestedWrapper} >
            <PrimaryHeading heading={'SignIn'} styling={styles.styling} />
            <Input container={styles.containerStyling}  />
            <Input container={styles.containerStyling} />
            <PrimaryButton title='Login' />
            <PrimaryHeading heading={'forgetPassword?'} styling={styles.forgetText} />
        </View>
    </View>
}

export default SignIn