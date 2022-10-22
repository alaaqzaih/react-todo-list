import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default class TodoItem extends Component {
  render() {
    const {description , title , handleDelete, handleEdit} = this.props
    return (
    <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
          <Card style={{ width: '18rem' , padding: '2rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
   
         <button type='submit' className='btn btn-block btn-primary mt-3 text-uppercase' onClick={handleEdit} >Edit</button>
        <button type='submit' className='btn btn-block btn-primary mt-3 text-uppercase' onClick={handleDelete} >delete</button>
      </Card.Body>
    </Card>
   


    </li>
    )
  }
}
