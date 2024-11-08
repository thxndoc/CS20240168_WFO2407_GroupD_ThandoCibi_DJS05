import { reducer, initialState } from './reducers.js'

// variables to track and methods that need to be available
const createStore = (initialState) => {
    let state = { ...initialState };
    const subscribe = new Set();

    return {
        getState() {
            return { ...state }
        },
        dispatch(action) {
            state = reducer(state, action);
            subscribe.forEach(callback => callback(state));
        },
        subscribe(callback) {
            subscribe.add(callback);
            callback(state);
            return () => subscribe.delete(callback);
        }
    };
};

export const store = createStore(initialState);