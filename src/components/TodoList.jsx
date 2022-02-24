import React from "react";
import { View, ScrollView , Text, StyleSheet } from "react-native";
import Todo from "./Todo";
const TodoList = ({todoArr}) => {
    return(
        <View>
            {todoArr.map((item, idx) => {
                return(
                    <Todo todo={item.title} />
                )
            })}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        
    }
})

export default TodoList