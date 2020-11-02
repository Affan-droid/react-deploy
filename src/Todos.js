import React from 'react';

const Todos = ({ todo, deleteTodo }) => {
    const todoList = todo.length ? (
        todo.map(todoing => {
            return (
                <div className="collection-item" key={todoing.id}>
                    <span onClick={() => { deleteTodo(todoing.id) }}> {todoing.content}  </span>
                </div>
            )
        })
    )
        :
        (<p className="center"> No item in List</p>)
    return (

        <div className="todos collection">
            {todoList}
        </div>


    );
}

export default Todos;