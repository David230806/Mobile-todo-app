import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./ui/AppText";
const Todo = ({todo, remove, onOpen}) => {
    return(
        <TouchableOpacity activeOpacity={0.5} onLongPress={() => {remove(todo.id)}} onPress={() => onOpen(todo.id)}>
            <View style={style.container}>
                <AppText style={style.text}>{todo.title}</AppText>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: 100,
        padding: 15,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        marginBottom: 20
    },
    text: {
        fontSize: 20,
    }
})

export default Todo