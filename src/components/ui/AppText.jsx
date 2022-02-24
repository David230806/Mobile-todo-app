import React from 'react'
import {StyleSheet, Text} from 'react-native'
const AppText = ({children, style}) => {
  return (
    <Text style={{...styles.default, ...style}}>{children}</Text>
  )

}

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-regular'
    }
})

export default AppText