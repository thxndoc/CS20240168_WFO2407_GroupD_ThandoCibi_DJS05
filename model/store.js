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


























// let subscribers = [];

// const states = [];

// export const getState = () => {
//     return Object.freeze({ ...states[0] }); // prevent mutation
// };
// console.log(getState());


// export const dispatch = (action) => {

//     const previous = getState();
//     const next = reducer(previous, action);

//     subscribers.forEach(subscriber => subscriber(previous, next))

//     states.unshift(next);
// };

// export const subscribe = (subscription) => {
//     subscribers.push(subscription);
//     const handler = (currentItem) => currentItem !== subscription;

//     const unsubscribe = () => {
//         const newSubscribers = subscribers.filter(handler);
//         subscribers = newSubscribers;
//     }

//     return unsubscribe;
// }

// const unsubscribe = subscribe((previous, next) => {
//     console.log('State changed:', { previous, next });
// });

// unsubscribe();
// dispatch(add());
// dispatch(subtract());
// dispatch(subtract());
// dispatch(reset());