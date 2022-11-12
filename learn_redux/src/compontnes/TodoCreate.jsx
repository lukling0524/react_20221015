import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../state/reducers/todo';

function TodoCreate() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const creatTodo = () => {
        dispatch(addTodo(input));
    };
    return (
        <>
            <input type="text" onChange={handleInput} />
            <button onClick={creatTodo}>등록</button>
        </>
    );
}

export default TodoCreate;
