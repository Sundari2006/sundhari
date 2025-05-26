import { useReducer } from "react";
const initialState =(initial)=>({
    count:initial,
});

function CounterReducer(state,action){
    switch(action.type){
        case 'INCREMENT':
            return{count: state.count+1};
        case 'DECREMENT':
            return{count: state.count-1};
        case 'RESET':
            return initialState(action.payload);
        default:
            return state;
    }
}
export default function
useCounterReduce(initialValue=0){
    const[state,dispatch]=
    useReducer(CounterReducer,initialValue,initialState);
    const increment=()=>dispatch({type:'INCREMENT'});
    const decrement=()=>dispatch({type:'DECREMENT'});
    const reset =()=>dispatch({type:'RESET',payload:initialValue});

    return{
        count:state.count,
        increment,
        decrement,
        reset,
    };
}