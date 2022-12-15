import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todosAction from '../../services/actions/todosAction';

const TodosApp = () => {
    const { isLoading, todos, error } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(todosAction());
    }, []);
    console.log(todos);
    return (
        <div>
            <h2>Todos App</h2>
            <h3>Fetching todos data from jsonplaceholder.</h3>
            {
                isLoading && <h3>Loading...</h3>
            }
            {
                error && <h3>{error.message}</h3>
            }
            <section>
                {todos && todos.map((todo) => {
                    return <article key={todo.id}>
                        <h4>{todo.id}</h4>
                        <h4>{todo.title}</h4>
                    </article>
                })}
            </section>
        </div>
    );
};

export default TodosApp;