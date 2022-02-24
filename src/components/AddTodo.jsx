import React,{useState} from "react";
import {View, StyleSheet,TextInput, Alert, Keyboard} from 'react-native'
import { THEME } from "../theme";
import {AntDesign} from "@expo/vector-icons"
const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState('')

    const handlePress = () => {
        if(value.trim()){
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        } else {
            Alert.alert('Введите название!!!!')
        }
    }

    return(
        <View style={style.box}>    
            <TextInput style={style.input} autoCorrect={false} onChangeText={setValue} value={value} placeholder='Add Todo' />
            {/* <Button  color={THEME.BLUE_COLOR} style={style.button} title="Добавить" onPress={handlePress} /> */}
            <AntDesign.Button color={THEME.NONE_COLOR} backgroundColor={THEME.BLUE_COLOR} onPress={handlePress} name="pluscircleo">
                Добавить
            </AntDesign.Button>
        </View>
    )
}

const style = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 50
    },
    input: {
        fontSize: 15,
        width: '60%',
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderStyle: 'solid',
        borderBottomWidth: 2,
    },
    button: {
        backgroundColor: THEME.BLUE_COLOR,
        color: 'black'
    }
})

export default AddTodo