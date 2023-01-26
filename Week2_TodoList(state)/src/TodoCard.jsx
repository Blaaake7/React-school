import TodoList from './TodoList';

export default function TodoCard({ todos, handleDeleteBtn, handleChangeTodo }) {
    
    return (
    <>
    <ul>
      {todos.map((todo) =>
      <TodoList 
      title={todo.title}
      content={todo.content}
      handleDeleteBtn={handleDeleteBtn} 
      handleChangeTodo={handleChangeTodo} 
      id={todo.id}
      key={todo.id}/>)}
    </ul>
    </>
  )
}
