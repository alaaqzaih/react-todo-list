import Form from './component/Form';
import "bootstrap";
import "bootstrap/scss/bootstrap.scss"

import { Component } from 'react';
// import uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';

// import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
class App extends Component {
  state={
    items:[],
    // desc:[],
    id:uuidv4(),
    item: '',
    desc:'',
    editItem:false
  }
  handleChange = (e) => {
    this.setState(
      {item: e.target.value
      }
    );
    };

    handleChangeD = (e) => {
      this.setState(
        {desc: e.target.value
        }
      );
      }; 
      
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title:this.state.item,
      description: this.state.desc
    }
    const updatedItems = [...this.state.items,newItem]

    this.setState(
      {
        items: updatedItems,
        item: "",
        desc:"",
        id:uuidv4(),
        editItem:false
      }
    )
    console.log("handle submit")
  
  
  };

  clearList = () => {
    
this.setState({
  items:[]
})
   };


  handleEdit = id => { 
    const filteredItem= this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item=> item.id===id);
    this.setState({
      items :filteredItem,
      item : selectedItem.title,
      desc :selectedItem.description,
      id : id,
      editItem: true
    });
    
    };

  handleDelete = id => { 
   const filteredItem= this.state.items.filter(item => item.id !== id);
    this.setState({
      items :filteredItem
    })
  }

  render(){
    // console.log(this.state);
  return (
        
      <div className="container">
        <div className="row">
       <div className="col-10 mx-auto col-md-8 mt-5">
<h3 className='text-capatlize text-center'> </h3>
<TodoInput handleChangeD={this.handleChangeD} desc={this.state.desc} item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem = {this.state.editItem}/>
<TodoList  items={this.state.items}  clearList={this.clearList}  handleDelete={this.handleDelete} handleEdit={this.handleEdit}
/>
       </div>
   
        </div>
      </div>
    
  );
}
}

export default App;
