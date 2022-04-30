import React,{useState} from 'react';
import {nanoid} from 'nanoid';
import "./inventory.css";


const Inventory = () => {
  const [books,setbooks]=useState([]);
//input field states

const [adddata,setaddata]=useState({

txtdtype:'',
txtdname:'',
txtissued:''
  
})
//form submit event

const handleADDsubmit=(e)=>{
  e.preventDefault();
  //creating an object
const fieldName =e.target.getAttribute('name');
const fieldValue =e.target.value;
const newFormData ={...adddata};
newFormData[fieldName]=fieldValue;
setaddata(newFormData);
}


const handlesubmitdata =(e)=>{
  e.preventDefault();
  const newContact={
    id:nanoid(),
    txtdtype: adddata.txtdtype,
    txtdname: adddata.txtdname,
    txtissued:adddata.txtissued,


  };


  
  const newContacts =[...books,newContact];
  setbooks(newContacts);
};





const handleDeleteClick = (contactId) => {
  const newContacts = [...books];

  const index = books.findIndex((contact) => contact.id === contactId);

  newContacts.splice(index, 1);

  setbooks(newContacts);
};
  return (
    <>
<div className="col-12">
<div className="col-sm-2">
    <div className="form-group">
          <label htmlFor="dtype">Distributor Type:</label>
          <select className="form-select"  >
            <option >--Select--</option>
            <option value="Medicine">Medicine</option>
            <option value="Consumable">Consumable</option>
            
          </select>
    </div>
</div>
<div className="col-sm-2">
    <div className="form-group">
          <label htmlFor="dtype">Distributor Name:</label>
          <select className="form-select"  >
            <option >--Select--</option>
            <option value="Rakesh">Rakesh</option>
            <option value="Subash">Subash</option>
            
          </select>
    </div>
</div>
</div>{/* main div*/}
<div className="col-12">

<form autoComplete='off' className='form-group' onSubmit={handlesubmitdata}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Dtype</th>
              <th>Dname</th>
              <th>Issued To</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>  <input type="text" className="form-control" id="txtdtype" name="txtdtype"  onChange={handleADDsubmit} /></td>
            <td><input type="text" className="form-control" id="txtdname" name="txtdname"   onChange={handleADDsubmit}  /></td>
            <td><input type="text" className="form-control" id="txtissued" name="txtissued" onChange={handleADDsubmit}  /></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Add"  />
        </form>

        
<form className='form-group' onSubmit={handlesubmitdata}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
            <th>Id</th>
              <th>Dtype</th>
              <th>Dname</th>
              <th> Issuedto</th>
              
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((contact) => (<tr>
              <td>{contact.id}</td>
            <td>{contact.txtdtype}</td>
            <td>{contact.txtdname}</td>
            <td>{contact.txtissued}</td>
            <td>  <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button></td>
            </tr>
            ))}
          </tbody>
        </table>
      </form>
</div>
          
      
    </>
  )
}

export default Inventory