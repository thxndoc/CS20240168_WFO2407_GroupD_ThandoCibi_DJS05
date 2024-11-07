import { store } from './model/store.js'
import { add, subtract, reset } from './model/actions.js'


console.log(`Initial State: ${JSON.stringify(store.getState())}`);

store.dispatch(add());
store.dispatch(add());
console.log(`Increment: ${JSON.stringify(store.getState())}`);

store.dispatch(subtract());
console.log(`Decrement: ${JSON.stringify(store.getState())}`);

store.dispatch(reset());
console.log(`Reset: ${JSON.stringify(store.getState())}`);
