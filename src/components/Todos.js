import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {
    return (
        <>
        <div className="container">
            <h3 className="title">Todos List</h3>
            {
                props.todo.map(
                    (todo)=>{
                        return <TodoItem todo={todo}/>
                    }
                )
            }
           
        </div>
        </>
    )
}
