import React, {useState} from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import AppTextBold from '../components/ui/AppTextBold';
import { THEME } from '../theme';
import {FontAwesome, AntDesign} from "@expo/vector-icons"
import AppCard from '../components/ui/AppCard';
import EditModal from '../components/EditModal';
import AppButton from '../components/ui/AppButton';
const TodoScreen = ({goBack, todo, onRemove, onSave}) => {
  const [modal, setModal] = useState(false)

  const editHandler = title => {
    onSave(todo.id, title)
    setModal(false)
  }
  return (
    <View>
        <EditModal onSave={editHandler} value={todo.title} modal={modal} onCancel={() => {setModal(false)}} />
        <AppCard style={styles.card}>
          <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
          <AppButton  onPress={() => {setModal(true)}} ><FontAwesome name='edit' size={20} color={THEME.NONE_COLOR}/></AppButton>
        </AppCard>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <AppButton onPress={goBack} backColor={THEME.BLUE_COLOR} color={THEME.NONE_COLOR} ><AntDesign name="back" size={20} color={THEME.NONE_COLOR} /></AppButton>
          </View>
          <View style={styles.button}>
            <AppButton backColor={THEME.DANGER_COLOR} color={THEME.NONE_COLOR} onPress={() => {onRemove(todo.id)}} ><FontAwesome name='remove' size={20} color={THEME.NONE_COLOR} /></AppButton> 
          </View>
        </View>
    </View>
  )
};

export default TodoScreen;

const styles = StyleSheet.create({
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    card: {
      marginBottom: 20,
      padding: 15
    },
    button:{
      width: Dimensions.get('window').width / 3,
    },
    title:{
      fontSize: 20
    }
})  