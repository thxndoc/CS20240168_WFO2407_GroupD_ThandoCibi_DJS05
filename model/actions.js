export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const RESET = 'RESET';

export const add = () => {
    return {
        type: ADD
    }
}

export const subtract = () => {
    return {
        type: SUBTRACT
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

//  console.log(add())
//  console.log(subtract())
//  console.log(reset())