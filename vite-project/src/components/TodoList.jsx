import TodoItem from './TodoItem';
import { useTodos } from '../hooks/useTodos';

const TodoList = () => {
  const {
    todos,
    newTodo,
    setNewTodo,
    addTodo,
    deleteTodo,
    editTodo,
    toggleTodo
  } = useTodos();

  return (
    <div className="todo-list">
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>

      <div className="todos">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onEdit={editTodo}
            onToggle={toggleTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
