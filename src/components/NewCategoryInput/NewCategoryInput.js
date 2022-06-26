import React from 'react'
import { TouchableWithoutFeedback,View,Text } from 'react-native'

import styles from './NewCategoryInput.style'

const ExpInput =({text,onPress})=>{
    return(
        <View style={styles.button}>
            <TouchableWithoutFeedback onPress={onPress} >
                <Text style={styles.input_text}>{text}</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default ExpInput