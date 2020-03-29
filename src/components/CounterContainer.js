import React from "react";
import {connect} from 'react-redux';
import {incrementAsyc,decrementAsyc} from "../actions/counter";
import Counter from "./Counter";
/*
     function CounterContainer(props)
     {
         const {number,increment,decrement}=props;
         return (
            <Counter number={number} onDecrement={decrement}
                 onIncrement={increment}/>
         )
     }

     const App=funtion(){
     }

     App()
     const App=()=>{
     }

     App()
     function App()
     {
     }
     App()
 */
const CounterContainer=({number,incrementAysc,decrementAsyc})=>{
    return (
        <Counter number={number} onDecrement={decrementAsyc}
                 onIncrement={incrementAysc}/>
    )
}
// react-redux (connect) , redux
export default connect(
    state=>({
        number:state.counter
    }),
    {
        incrementAsyc,
        decrementAsyc
    }
)(CounterContainer)