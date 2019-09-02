// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoData from './TodoData';
import Todo from './Todo';

function TodoList() {
    return (
    TodoData.map(item => <Todo key={item.id} todo={item}/>)
    )
}

export default TodoList;