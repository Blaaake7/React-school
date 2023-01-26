import TodoCard from './TodoCard';
import React, { useCallback, useState } from 'react'

function App() {
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [Todo, setTodo] = useState([]);
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "TEST1",
            content: "Initail Todo"
        },
        {
            id: 2,
            title: "TEST2",
            content: "What's next?"
        }]);
    const [id, setId] = useState(3);

    const submit = (title, todo) => {
        if (todo === '' || title === '') {
            return;
        }
        const newTodos = [...todos];
        newTodos.push({
            id: id,
            title: newTitle,
            content: newContent,
        });
        setTodos(newTodos);
        setId((id) => (id + 1));
        setNewTitle("");
        setNewContent("");
    };
    
    const handleDeleteBtn = (id) => {
        console.log(id);
        setTodos(todos.filter((todo) => id !== todo.id)); 
    }

    const handleChangeTodo = (selectedTitle, selectedContent, selectedId) => {
        const editedTodos = todos.filter((todo) => selectedId !== todo.id);
        editedTodos.push({
            id: id,
            title: selectedTitle,
            content: selectedContent,
        });
        setTodos(editedTodos);
        setId((id) => (id + 1));
    }
    
  return (
    <div>
      <div className='todo'>
        <h1 className='pageTitle'>Today's TodoList!({todos.length})</h1>
        <div className="todoTitle">
            오늘 할 일을 적어보세요!
        </div>
        <div className="contentWrap">
            <input type="text"
            className="todoInput"
            placeholder='제목'
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}/>
        </div>
        <div className="contentWrap">
            <input type="text"
            className="todoInput"
            placeholder='내용'
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}/>
        </div>
        <div>
            <button onClick={submit} className="submit">ADD!</button>
        </div>
    </div>
        <hr/>
        <TodoCard todos={todos} handleDeleteBtn={handleDeleteBtn} handleChangeTodo={handleChangeTodo}/>
    </div>
  );
}

export default App;
