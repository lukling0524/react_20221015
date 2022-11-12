import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
    const { todos } = useSelector((state) => state);
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
