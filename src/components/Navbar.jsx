import React from "react";
import {View, StyleSheet, Platform} from 'react-native'
import AppTextBold from "./ui/AppTextBold";
import { THEME } from "../theme";

const Navbar = ({title}) => {
    return(
        <View style={{...style.navbar, ...Platform.select({ios: style.navbarIos, android: style.navbarAndroid})}}>
            <AppTextBold style={style.text}>{title}!</AppTextBold>
        </View>
    )
}

const style = StyleSheet.create({
    navbar: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    navbarAndroid: {
        backgroundColor: THEME.BLUE_COLOR,
    },
    navbarIos: {
        borderBottomColor: THEME.BLUE_COLOR,
        borderBottomWidth: 1
    },
    text: {
        color: Platform.OS === 'ios' ? THEME.BLUE_COLOR : THEME.NONE_COLOR,
        fontSize: 20
    }
})

export default Navbar