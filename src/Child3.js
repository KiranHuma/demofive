import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child3 = () => {
    let [state, dispatch]= useReducer(CounterReducer,10);
    //console.log(state)
 return(
     <div>
         <h2>This is 3rd Child with COUNTER-REDUCER</h2>
         <h3>Value of reducer state is: {state}</h3>
          <button onClick={()=>dispatch('INCREMENT')}>Increment value in reducer</button>
     </div>
 )
}
export default Child3;