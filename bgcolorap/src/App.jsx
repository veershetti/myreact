import React ,{useState} from 'react';
const App =() => { 
    const purple="#8e44ad";
    const [precolor,postcolor] = useState(purple);
const bgChange = () =>{
    
    const purple="yellow";
    postcolor(purple);
    
};  
const bgback = () =>{
    
    const purple="blue";
    postcolor(purple);
    
};  


return(
<>
    <div style={{background: precolor}}>
        <button onMouseEnter={bgChange} onMouseLeave={bgback} >Click Me</button>
    </div>
</>
    );
}
export default App;