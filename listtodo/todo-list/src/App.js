// import "bootstrap";
// import "bootstrap/scss/bootstrap.scss"
import uuid from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <TodoInput />
          <TodoList />
          {/* <div className="col-4 bg-warning" > hello

          </div>
          <div className="col-4 bg-danger" > hello

</div>
<div className="col-4 bg-primary" > hello

</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
