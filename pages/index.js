import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import cx from 'classnames';
import styles from '../styles/Home.module.css'


export default function Home() {
  const [todoItem , setTodoItem] = useState('')
  const [items , setItems] = useState([
    {
      id:'1234',
      message:'Buy Milk',
      done:false
    }
  ])

  const handleAdd = () => {
    if(todoItem){
      setItems([{
        id:uuidv4(),
        message: todoItem,
        done:false
      },
       
        ...items,
        
      ])
      setTodoItem("")
      
    }
   
  }

  const handleEnter=(e)=> {
    if(e.key ==='Enter'){
      handleAdd()
    }
  }

  const handleToggle =(id) => {
      const _items = items.map((item)=> {
        if(item.id === id){
          return {
            ...item,
            done:!item.done
          }
        }
        return item
      })
      setItems(_items)
  }
  return (
    <div className="w-3/4 mx-auto text-center ">
      <div className="pt-12">
        <h6 className="text-xs uppercase font-bold pb-2">Learning React</h6>
        <h1 className="text-5xl" >Todo App</h1>
      </div>

      <div className="pt-12">
        <input 
        className="text-gray-900 px-4 py-2 text-center rounded w-full" 
        type='text' 
        value={todoItem} 
        onChange={(e)=> setTodoItem(e.target.value)}
        onKeyDown={handleEnter}/>
        {/* <button type='button' onClick={handleAdd}>Add</button> */}
      </div>

      <ul className="pt-12 ">
        {
          items
          .filter(({done})=> !done)
          .map(({id,message})=> (
            <li 
            key={id} 
            onClick={(e)=>handleToggle(id)} 
            className={cx(styles.item)}>
              {message}
              </li>
          ))
        }

         {
          items
          .filter(({done})=> done)
          .map(({id,message})=> (
            <li 
            key={id} 
            onClick={(e)=>handleToggle(id)} 
            className={cx(styles.item, styles.done)}
            >
              {message}
              </li>
          ))
        }
       
      </ul>
    </div>
  )
}
