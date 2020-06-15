import React from 'react';
import Child from './Child';
import Child2 from './Child2';
import Child3 from './Child3';

const Parent = (props) => { 
    return (
        <div>
        <Child />
        <Child2/>
        <Child3/>
        </div>
        
        )
    }
export default Parent;