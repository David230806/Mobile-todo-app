import React, {useState} from 'react'
import { StyleSheet, Alert ,TextInput , View, Button, Modal } from 'react-native';
import { THEME } from '../theme';
import AppButton from './ui/AppButton';
const EditModal = ({modal, onCancel, value, onSave}) => {
    const [title, setTitle] = useState(value)

    const handleSubmit = () => {
        if(title.trim().length < 3) {
            Alert.alert('Ошибка', `Минимальная длина названия 3 символа, сейчас ${title.trim().length} символа `)
        } else {
            onSave(title)
        }
    }
  return (
    <Modal visible={modal} animationType="slide" transparent={false}>
        <View style={styles.wrap}>
            <TextInput value={title} onChangeText={setTitle} style={styles.input} placeholder='Введите название' autoCapitalize='none' autoCorrect={false} maxLength={64} />
            <View style={styles.buttons}>
                <AppButton onPress={onCancel} backColor={THEME.DANGER_COLOR} >Отменить</AppButton>
                <AppButton onPress={handleSubmit} backColor={THEME.BLUE_COLOR} >Сохранить</AppButton>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    wrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input: {
        borderBottomColor: THEME.MAIN_COLOR,
        padding: 10,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',

    }
})

export default EditModal