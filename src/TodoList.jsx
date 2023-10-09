import { TodoItem } from "./TodoItem"
  
export function TodoList({todos, tooggleTodo, deleteTodo}){
   return(
   <ul className="list">
    {todos.length === 0 && "no Todos "}
    {todos.map(todo =>{
      return <TodoItem {...todo} key={todo.id} tooggleTodo={tooggleTodo} deleteTodo={deleteTodo} />
      
    })}
 
  </ul>
   )
}