import { ADD, SUBTRACT, RESET } from './actions';

export const initialState = {
    count: 0
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD: 
            return {
                ...state,
                count: state.count + 1,
            };
        
        case SUBTRACT: 
            return {
                ...state,
                count: state.count - 1,
            };
        
        case RESET: 
            return {
                ...initialState
            } 

        default: return state;
    }   
};

