import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import CreatingNewNotes from "./components/CreatingNewNotes";
import { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
  //setting initial state with the empty toDoList
  state = {
    toDoList: [],
    newNote: "",
    idNumber: "",
    anotherState: true,
  };

  //this newNoteChangeHandler will pass down the new input value to the newNote in the state
  newNoteChangeHandler = (event) => {
    const newNote = event.target.value.substring(0, 20);
    this.setState({ newNote: newNote });
  };

  // then the newnote in the state will be added to the toDoList Array
  addingNewNote = () => {
    if (this.state.newNote === "") return; //if the newNote is an emty string, then nothing will added to the toDolist array, prevent the situation where they pass an empty note to the array
    const newToDoList = [...this.state.toDoList];
    newToDoList.push({ note: this.state.newNote });
    // finding the position of the new object just being pushed to the array
    const idNumber = newToDoList.findIndex(
      (position) => position.note === this.state.newNote
    );
    newToDoList[idNumber].id = idNumber + 1;

    //after create a new object and add it this new object to the toDoLisarray, we need to set the State of the newNote back to ""
    this.setState(
      {
        toDoList: newToDoList,
        newNote: "",
      },
      () => console.log(this.state) //console.log the new state that just updated
    );
  };
  //delete the note
  deleteNoteHandler = (index) => {
    const newToDoList = [...this.state.toDoList];
    newToDoList.splice(index, 1);
    this.setState({ toDoList: newToDoList }, () => console.log(this.state));
  };

  //complete note
  completeTaskHandler = () => {};

  render() {
    const toDoList = this.state.toDoList.length >= 0 && (
      <div className="todo-list-section centered">
        <TransitionGroup component={null}>
          {this.state.toDoList.map((note, index) => (
            <CSSTransition key={index} timeout={1000} classNames="fade">
              <TodoItem
                key={index}
                serialNumber={index + 1}
                info={note.note}
                delete={() => this.deleteNoteHandler(index)}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
    return (
      <div className="App centered">
        <Header />
        {toDoList}
        <CreatingNewNotes
          value={this.state.newNote}
          change={(event) => this.newNoteChangeHandler(event)}
          submit={this.addingNewNote}
        />
      </div>
    );
  }
}

export default App;
