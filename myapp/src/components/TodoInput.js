import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    const {handleChangeD ,desc ,item ,handleChange ,handleSubmit , editItem } = this.props;
    return (
        <div className="card card-body my-3">
<form onSubmit={handleSubmit}>
    <div className="input-group">
        <div className="input-group-prepend">

        </div>
    </div>
    <input type="text" className='form-control text-capitalize'
     placeholder='add title' 
     value={item}
     onChange={handleChange} />

<input type="text" className='form-control text-capitalize'
     placeholder='add Description' 
     value={desc}
     onChange={handleChangeD} />

    <button type='submit' className='btn btn-block btn-primary mt-3 text-uppercase'>{editItem? 'Edit': 'Add'}</button>
    
</form>

        </div>
    
    )
  }
}
