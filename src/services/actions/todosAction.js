import axios from 'axios';

const { GET_REQUEST, SUCCESS_REQUEST, FAILED_REQUEST } = require('../constants/todosCons');
const todosAction = () => async (dispatch) => {
    dispatch({ type: GET_REQUEST });
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch({
            type: SUCCESS_REQUEST,
            payload: res.data
        });
    } catch (error) {
        dispatch({ type: FAILED_REQUEST, payload: error.message });
    }
}

export default todosAction;