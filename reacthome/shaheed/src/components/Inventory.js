import React from 'react';
import "./inventory.css";


const Inventory = () => {
  return (
    <>
        
<div class="col-12">
<div class="col-sm-2">
    <div className="form-group">
          <label htmlFor="dtype">Distributor Type:</label>
          <select class="form-select"  >
            <option selected>--Select--</option>
            <option value="Medicine">Medicine</option>
            <option value="Consumable">Consumable</option>
            
          </select>
    </div>
</div>
<div class="col-sm-2">
    <div className="form-group">
          <label htmlFor="dtype">Distributor Name:</label>
          <select class="form-select"  >
            <option selected>--Select--</option>
            <option value="Rakesh">Rakesh</option>
            <option value="Subash">Subash</option>
            
          </select>
    </div>
</div>
</div>{/* main div*/}
<div className="col-12">
<form action="/Inventory" method="post">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Dtype</th>
              <th>Dname</th>
              <th>Issued To</th>
            </tr>
          </thead>
          <tbody>
            <td>  <input type="text" class="form-control" id="txtdtype" name="txtdtype"/></td>
            <td><input type="text" class="form-control" id="txtdname" name="txtdname"/></td>
            <td><input type="text" class="form-control" id="txtissued" name="txtissued"/></td>
          </tbody>
        </table>
        <input type="submit" value="Add"  />
        </form>

        
</div>
          
      
    </>
  )
}

export default Inventory