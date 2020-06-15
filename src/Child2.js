import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child2 = () => {
    let [state, dispatch]= useReducer(CounterReducer,100);
    //console.log(state)
 return(
     <div>
         <h2>This is 2nd Child with COUNTER-REDUCER</h2>
         <h3>Value of reducer state is: {state}</h3>
          <button onClick={()=>dispatch('DECREMENT')}>Decrement value in reducer</button>
     </div>
 )
}
export default Child2;