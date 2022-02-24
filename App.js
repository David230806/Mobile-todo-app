import React, {useState} from 'react';
import { StyleSheet, View, Alert  } from 'react-native';
import Navbar from './src/components/Navbar';
import Main from './src/screens/Main';
import TodoScreen from './src/screens/TodoScreen';
import {useFonts} from "expo-font"
import { THEME } from './src/theme';

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todoArr, setTodoArr] = useState([
    {id: '1', title: 'Написать Русский'},
  ])
  const [fonts] = useFonts({
    'roboto-regular': require('../my-project/assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('../my-project/assets/fonts/Roboto-Bold.ttf')
  })

  if(!fonts){
    return null
  }

  const addTodo = (title) => {
    setTodoArr(prev => [
      ...prev, 
      {
        id: Date.now().toString(),
        title
      }
    ])
    console.log(todoArr)
  }

  const handleEdit = (id, title) => {
    todoArr.map(todo => {
      if(todo.id === id){
        todo.title = title
      }
    })
    // console.log(todoArr)
  }
  
  const removeTodo = (id) => {
    const title = todoArr.find(t => t.id === id)
    Alert.alert(
      "Удаление",
      `Вы уверены что хотите удалить "${title.title}"?`,
      [
        {
          text: "Отмена",
          style: "cancel"
        },
        { 
          text: "Удалить",
          style: 'destructive',
          onPress: () => {
            setTodoId(null)
            setTodoArr(todoArr.filter(item => item.id !== id))
          }
        }
      ],
      { cancelable: false }
    );
  }

  let content = (
    <Main todos={todoArr} addTodo={addTodo} removeTodo={removeTodo} onOpen={(id) => {
      setTodoId(id) 
    }}/>
  )
  
  if(todoId){
    const todo = todoArr.find(item => item.id === todoId)
    console.log(todoArr.find(item => item.id === todoId))
    content = <TodoScreen onSave={handleEdit} onRemove={removeTodo} goBack={() => setTodoId(null)} todo={todo} />
  }

  return (
    <View>
      <Navbar title="Todo App" />    
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: THEME.PADDINGHORIZONTAL,
      paddingVertical: 20
    },
});
