import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';
import { THEME } from '../theme';

const Main = ({todos, addTodo, removeTodo, onOpen}) => {
  const [width, setWidth] = useState(Dimensions.get('window').width - THEME.PADDINGHORIZONTAL * 2)

  useEffect(() => {
    const updateWidth = () => {
      const updatedWidth =  Dimensions.get('window').width - THEME.PADDINGHORIZONTAL * 2
      setWidth(updatedWidth)
    }
    Dimensions.addEventListener('change', updateWidth)

    return () => {
      Dimensions.addEventListener('change', updateWidth)
    }
  }, [])

  let content = (
    <View style={{width: width}}>
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => ( 
         <Todo todo={item} remove={removeTodo} onOpen={onOpen}/>
        )}
      />
    </View>
  )

  if(todos.length === 0){
    content = 
    <View style={styles.imgWrap}>
      <Image style={styles.img} source={require('../../assets/no-items.png')} />
    </View>
  }

  return (
    <View>
        <AddTodo onSubmit={addTodo} />

        {content}
    </View>
  )
}

export default Main;

const styles = StyleSheet.create({
  imgWrap:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
})
