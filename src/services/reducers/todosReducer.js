import { FAILED_REQUEST, GET_REQUEST, SUCCESS_REQUEST } from "../constants/todosCons";

const initialState = {
    isLoading: false,
    todos: [],
    error: null,
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REQUEST:
            return {
                ...state, isLoading: true
            }
        case SUCCESS_REQUEST:
            return {
                isLoading: false,
                todos: action.payload,
                error: null
            }
        case FAILED_REQUEST:
            return {
                isLoading: false,
                todos: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default todosReducer;