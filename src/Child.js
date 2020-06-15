import React ,{useContext} from 'react';
import CounterContext from './CounterContext';

const Child = () => {

    let counterValue= useContext(CounterContext)
    
    return (
        <div>
         <h2>This is First Child with COUNTER-CONTEXT</h2>
         <h3>CounterValue:{counterValue[0]}</h3>

         <button onClick={()=> {counterValue[1](++counterValue[0])}}>
             Increment 
             </button>
         
        </div>
    )
}
export default Child;