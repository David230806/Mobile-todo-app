import React from 'react'
import { StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native"
import { THEME } from '../../theme'
import AppTextBold from './AppTextBold'
const AppButton = ({children, onPress, color=THEME.NONE_COLOR, backColor=THEME.BLUE_COLOR}) => { 
  return (
    Platform.OS === 'android' ? (
        <TouchableNativeFeedback onPress={onPress} activeOpacity={0.7}>
            <View style={{...styles.button, backgroundColor: backColor}}>
                <AppTextBold style={{color: color}}>
                    {children}
                </AppTextBold>
            </View>
        </TouchableNativeFeedback>
    ) : (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={{...styles.button, backgroundColor: backColor}}>
                <AppTextBold style={{color: color}}>
                    {children}
                </AppTextBold>
            </View>
        </TouchableOpacity>
    )
  )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        flexDirection:  'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AppButton