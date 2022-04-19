import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading'
import Para from './Para'
import {Sum,Sub,Mul} from "./list"

function App(){
    return (
        <>
        <ol>
<li>The Sum of two numbers is: {Sum(4,5)}</li>
<li>The Substraction of two numbers is: {Sub(8,5)}</li>
<li>The Multiplication of two numbers is: {Mul(4,5)}</li>

</ol>
                </>    
              
        );
}



export default App;
