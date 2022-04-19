import React,{useState} from 'react';
const App =() => {
    const [fullName,setFullName] = useState({
        fName:"",
        lName:"",
        email:"",
        phone:"",
        qua:"",
    });
    
    
    
    
    const inputEvent = (event) =>{
        console.log(event.target.value);
       // const value =event.target.value;
        //const name= event.target.name;
        const{value,name}=event.target
        setFullName((preValue)=>{
            return{
                ...preValue,
                [name]: value,
            };

        });

    };

    const onSubmit=(event) =>{
        event.preventDefault();
        alert("form submitted");
        
    };
    return(
        <>
<div className='main_div'>
<form onSubmit={onSubmit}>
    <h1>Hello {fullName.fName}{fullName.lName}<br></br> {fullName.email}<br></br> {fullName.phone}<br></br>{fullName.qua} </h1>
    <input type="text" name="fName" placeholder="Enter YOur Name" 
     onChange={inputEvent}
       value={fullName.fName}
     />
     <input type="text" name='lName' placeholder="Enter YOur LastName" 
     onChange={inputEvent}
         value={fullName.lName}
     />
      <input type="email" name='email' placeholder="Enter YOur LastName" 
     onChange={inputEvent}
         value={fullName.email}
     />
     
     <input type="number" name='phone' placeholder="Enter YOur LastName" 
     onChange={inputEvent}
         value={fullName.phone}
     />
     
     <input type="text" name='qua' placeholder="Enter YOur qualification" 
     onChange={inputEvent}
         value={fullName.qua}
     />
     
    <button >Click Me </button>
    </form>
</div>

        </>
    );
}
export default App;